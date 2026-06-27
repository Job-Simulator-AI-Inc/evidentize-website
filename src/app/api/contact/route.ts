import { Resend } from 'resend'
import { NextRequest } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const confirmationHtml = (firstName: string, subject: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your message — Evidentize</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f3ee;font-family:'Inter',Arial,Helvetica,sans-serif;color:#12161a;">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f3f3ee;padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;background-color:#fbfbf9;border-radius:14px;overflow:hidden;border:1px solid #e4e5de;">

          <!-- Header bar -->
          <tr>
            <td style="background-color:#0f7a5a;padding:28px 40px;">
              <p style="margin:0;font-family:'Space Grotesk',Arial,sans-serif;font-size:20px;font-weight:700;letter-spacing:-0.02em;color:#ffffff;">
                Evidentize
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">

              <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#0f7a5a;">
                Message received
              </p>

              <h1 style="margin:0 0 24px;font-family:'Space Grotesk',Arial,sans-serif;font-size:26px;font-weight:700;letter-spacing:-0.025em;line-height:1.15;color:#12161a;">
                Thanks, ${firstName}.<br />We&rsquo;ll be in touch.
              </h1>

              <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#3a434c;">
                Your message about <strong style="color:#12161a;">&ldquo;${subject}&rdquo;</strong> has reached us. One of our team will review it and respond within <strong style="color:#12161a;">one business day</strong>.
              </p>

              <p style="margin:0 0 32px;font-size:15px;line-height:1.65;color:#3a434c;">
                In the meantime, if your enquiry is urgent you can reach us directly at
                <a href="mailto:hello@evidentize.io" style="color:#0f7a5a;text-decoration:none;font-weight:500;">hello@evidentize.io</a>.
              </p>

              <!-- Divider -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="border-top:1px solid #e4e5de;"></td>
                </tr>
              </table>

              <!-- What to expect callout -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f3f3ee;border-radius:10px;margin-bottom:32px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#6b7680;">
                      What happens next
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:5px 0;vertical-align:top;">
                          <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background-color:#0f7a5a;margin-top:6px;margin-right:10px;"></span>
                        </td>
                        <td style="padding:4px 0;font-size:14px;line-height:1.55;color:#3a434c;">
                          A member of our team reads every message personally.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:5px 0;vertical-align:top;">
                          <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background-color:#0f7a5a;margin-top:6px;margin-right:10px;"></span>
                        </td>
                        <td style="padding:4px 0;font-size:14px;line-height:1.55;color:#3a434c;">
                          We will reply directly to this email address within one business day.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:5px 0;vertical-align:top;">
                          <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background-color:#0f7a5a;margin-top:6px;margin-right:10px;"></span>
                        </td>
                        <td style="padding:4px 0;font-size:14px;line-height:1.55;color:#3a434c;">
                          If your enquiry is partnership-related, we may invite you to a short introductory call.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:15px;line-height:1.65;color:#3a434c;">
                Thank you for reaching out.
              </p>
              <p style="margin:4px 0 0;font-size:15px;line-height:1.65;color:#3a434c;">
                — The Evidentize Team
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px 28px;border-top:1px solid #e4e5de;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#6b7680;">
                You are receiving this email because you submitted a contact form at
                <a href="https://evidentize.io" style="color:#6b7680;">evidentize.io</a>.
                If this was not you, please disregard this message.
              </p>
            </td>
          </tr>

          <!-- Seal bar -->
          <tr>
            <td style="background-color:#12161a;padding:14px 40px;">
              <p style="margin:0;font-size:11px;color:#95a0a6;letter-spacing:0.04em;">
                &copy; Evidentize &nbsp;&middot;&nbsp; evidentize.io
              </p>
            </td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>

</body>
</html>
`

const confirmationText = (firstName: string, subject: string) =>
  `Hi ${firstName},\n\nThank you for getting in touch. Your message about "${subject}" has reached us and a member of our team will respond within one business day.\n\nIf your enquiry is urgent, you can reach us directly at hello@evidentize.io.\n\n— The Evidentize Team\nevidentize.io`

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, subject, message } = body

  if (!name || !email || !subject || !message) {
    return Response.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return Response.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  const firstName = (name as string).split(' ')[0]

  // Send notification to the Evidentize inbox
  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.RESEND_TO_CONTACT!,
    replyTo: email,
    subject: `[Contact] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p>${(message as string).replace(/\n/g, '<br />')}</p>
    `,
  })

  if (error) {
    console.error('Resend error (notification):', error)
    return Response.json({ error: error.message ?? 'Failed to send message. Please try again.' }, { status: 500 })
  }

  console.log('Notification sent, id:', data?.id)

  // Send confirmation to the submitter — fire and forget, do not block success response
  resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: email,
    subject: `We received your message — Evidentize`,
    text: confirmationText(firstName, subject),
    html: confirmationHtml(firstName, subject),
  }).then(({ error: confErr }) => {
    if (confErr) console.error('Resend error (confirmation):', confErr)
  }).catch((err) => console.error('Resend confirmation unexpected error:', err))

  return Response.json({ success: true })
}
