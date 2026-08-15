const CONTACT_TO = process.env.CONTACT_TO || 'info@baxterlabs.io';
const CONTACT_FROM = process.env.CONTACT_FROM || 'BaxterLabs <info@baxterlabs.io>';
const WEB3FORMS_KEY =
  process.env.WEB3FORMS_KEY || '2dc63a98-1878-4b54-96f7-38297382172e';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function trimField(value, max) {
  return String(value || '').trim().slice(0, max);
}

function parseBody(req) {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
    return req.body;
  }
  if (typeof req.body === 'string' && req.body.length) {
    return JSON.parse(req.body);
  }
  return {};
}

async function sendResend({ to, replyTo, subject, text, html }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;

  const payload = {
    from: CONTACT_FROM,
    to: Array.isArray(to) ? to : [to],
    subject,
    text,
    html,
  };
  if (replyTo) payload.reply_to = replyTo;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error('Resend failed', res.status, detail.slice(0, 400));
    return false;
  }
  return true;
}

async function sendLeadToWeb3Forms({ name, email, business, message }) {
  const form = new URLSearchParams();
  form.set('access_key', WEB3FORMS_KEY);
  form.set('subject', 'BaxterLabs site inquiry');
  form.set('from_name', 'BaxterLabs website');
  form.set('name', name);
  form.set('email', email);
  form.set('message', message);
  if (business) form.set('business', business);

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form.toString(),
  });
  const json = await res.json().catch(() => ({}));
  return res.ok && json.success !== false;
}

function confirmationText(name, email) {
  return [
    `Hi ${name},`,
    '',
    `Thanks for reaching out. We'll get back to you asap.`,
    '',
    `This confirmation went to ${email}.`,
    '',
    "If that wasn't you, ignore this.",
    '',
    'Costa & Mike',
    'BaxterLabs',
    CONTACT_TO,
  ].join('\n');
}

function confirmationHtml(name, email) {
  return `<p>Hi ${escapeHtml(name)},</p>
<p>Thanks for reaching out. We'll get back to you asap.</p>
<p>This confirmation went to <strong>${escapeHtml(email)}</strong>.</p>
<p>If that wasn't you, ignore this.</p>
<p>Costa &amp; Mike<br>BaxterLabs<br>${escapeHtml(CONTACT_TO)}</p>`;
}

function leadText({ name, email, business, message }) {
  const lines = [
    'New site inquiry',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
  ];
  if (business) lines.push(`Business: ${business}`);
  lines.push('', message);
  return lines.join('\n');
}

function leadHtml({ name, email, business, message }) {
  const biz = business
    ? `<p><strong>Business:</strong> ${escapeHtml(business)}</p>`
    : '';
  return `<p><strong>Name:</strong> ${escapeHtml(name)}<br>
<strong>Email:</strong> ${escapeHtml(email)}</p>
${biz}
<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`;
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }

  let body;
  try {
    body = parseBody(req);
  } catch {
    return res.status(400).json({ ok: false });
  }

  if (body.botcheck) {
    return res.status(200).json({ ok: true, confirmationSent: false });
  }

  const name = trimField(body.name, 200);
  const email = trimField(body.email, 320);
  const business = trimField(body.business, 200);
  const message = trimField(body.message, 8000);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false });
  }

  const fields = { name, email, business, message };

  const leadViaResend = await sendResend({
    to: CONTACT_TO,
    replyTo: email,
    subject: `Site inquiry from ${name}`,
    text: leadText(fields),
    html: leadHtml(fields),
  });

  const leadOk = leadViaResend || (await sendLeadToWeb3Forms(fields));
  if (!leadOk) {
    return res.status(502).json({ ok: false });
  }

  const confirmationSent = await sendResend({
    to: email,
    replyTo: CONTACT_TO,
    subject: 'We got your note — BaxterLabs',
    text: confirmationText(name, email),
    html: confirmationHtml(name, email),
  });

  return res.status(200).json({ ok: true, confirmationSent });
}
