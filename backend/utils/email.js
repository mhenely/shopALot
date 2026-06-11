const { Resend } = require('resend')
const fs = require('fs')
const path = require('path')

// Lazy singleton so importing this module never requires a key (tests/CI run without one).
let resend
const getResend = () => {
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY)
  return resend
}

// Sender must be on a domain verified in Resend (e.g. matthenely.com).
const FROM = process.env.FROM_EMAIL || 'shopALot <onboarding@resend.dev>'

// Optional resume PDF. If present it's attached; if not, the email still sends.
const RESUME_PATH = path.join(__dirname, '..', 'assets', 'resume.pdf')

// Contact details surfaced in the email
const CONTACT = {
  name: 'Matt Henely',
  email: 'henely.matt@gmail.com',
  site: 'https://matthenely.com',
  linkedin: 'https://www.linkedin.com/in/matt-henely/',
  github: 'https://github.com/mhenely',
}

const orderHtml = (items, total) => `
  <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #1f2937;">
    <h2 style="margin-bottom: 4px;">Thanks for your order! 🛒</h2>
    <p style="color: #6b7280; margin-top: 0;">This is a confirmation from <strong>shopALot</strong>.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      ${items.map((i) => `
        <tr>
          <td style="padding: 6px 0; border-bottom: 1px solid #eee;">${i.quantity} × ${i.name}</td>
          <td style="padding: 6px 0; border-bottom: 1px solid #eee; text-align: right;">$${i.price}</td>
        </tr>`).join('')}
      <tr>
        <td style="padding: 10px 0; font-weight: 600;">Total</td>
        <td style="padding: 10px 0; font-weight: 600; text-align: right;">$${total}</td>
      </tr>
    </table>
    <div style="background:#f9fafb; border:1px solid #eee; border-radius:8px; padding:16px; margin-top:8px;">
      <p style="margin:0 0 8px;"><strong>👋 A quick note:</strong> shopALot is a full-stack portfolio
      project built by <strong>${CONTACT.name}</strong>. No real payment was processed — this runs in
      Stripe test mode. My resume is attached, and I'd love to connect:</p>
      <p style="margin:0;">
        <a href="${CONTACT.site}">${CONTACT.site}</a><br/>
        <a href="${CONTACT.linkedin}">LinkedIn</a> &nbsp;·&nbsp;
        <a href="${CONTACT.github}">GitHub</a><br/>
        <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>
      </p>
    </div>
  </div>`

// items: [{ name, quantity, price }], total: string
const sendOrderConfirmation = async ({ to, items, total }) => {
  const attachments = []
  if (fs.existsSync(RESUME_PATH)) {
    attachments.push({
      filename: 'Matt-Henely-Resume.pdf',
      content: fs.readFileSync(RESUME_PATH).toString('base64'),
    })
  }

  return getResend().emails.send({
    from: FROM,
    to,
    subject: 'Your shopALot order confirmation',
    html: orderHtml(items, total),
    attachments,
  })
}

module.exports = { sendOrderConfirmation }
