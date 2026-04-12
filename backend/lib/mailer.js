import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
const smtpSecure = String(process.env.SMTP_SECURE || "false") === "true";

let transporter = null;

const isSmtpConfigured = () => {
  return Boolean(smtpHost && smtpPort && smtpUser && smtpPass);
};

const getTransporter = () => {
  if (!isSmtpConfigured()) {
    return null;
  }

  if (transporter) {
    return transporter;
  }

  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  return transporter;
};

export const sendContactNotificationEmail = async (contactMessage, recipientAddress) => {
  const smtpTransport = getTransporter();
  const notifyTo = (recipientAddress || process.env.CONTACT_NOTIFY_TO || "").trim();
  if (!smtpTransport || !notifyTo) {
    return;
  }

  const subject = contactMessage.subject || "General inquiry";
  const phoneLine = contactMessage.phone
    ? `<p><strong>Phone:</strong> ${contactMessage.phone}</p>`
    : "";

  await smtpTransport.sendMail({
    from: process.env.SMTP_FROM || smtpUser,
    to: notifyTo,
    replyTo: contactMessage.email,
    subject: `[DFXN Contact] ${subject}`,
    html: `
      <h2>New contact message submitted</h2>
      <p><strong>Name:</strong> ${contactMessage.name}</p>
      <p><strong>Email:</strong> ${contactMessage.email}</p>
      ${phoneLine}
      <p><strong>Source:</strong> ${contactMessage.sourcePage}</p>
      <p><strong>Message:</strong></p>
      <p>${contactMessage.message.replace(/\n/g, "<br/>")}</p>
    `,
  });
};