import { Resend } from 'resend'
import { NextRequest } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const confirmationHtml = (firstName: string, organisation: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your demo is booked — Evidentize</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f3ee;font-family:'Inter',Arial,Helvetica,sans-serif;color:#12161a;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f3f3ee;padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;background-color:#fbfbf9;border-radius:14px;overflow:hidden;border:1px solid #e4e5de;">

          <!-- Header bar -->
          <tr>
            <td style="background-color:#12161a;padding:28px 40px 24px;">
              <p style="margin:0 0 16px;font-family:'Space Grotesk',Arial,sans-serif;font-size:20px;font-weight:700;letter-spacing:-0.02em;color:#ffffff;">
                Evidentize
              </p>
              <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#1fb286;">
                Demo request received
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">

              <h1 style="margin:0 0 20px;font-family:'Space Grotesk',Arial,sans-serif;font-size:26px;font-weight:700;letter-spacing:-0.025em;line-height:1.15;color:#12161a;">
                We&rsquo;ll be in touch shortly,<br />${firstName}.
              </h1>

              <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#3a434c;">
                Thank you for your interest in Evidentize on behalf of <strong style="color:#12161a;">${organisation}</strong>. Your demo request has been received and a member of our team will reach out within <strong style="color:#12161a;">one business day</strong> to arrange a convenient time.
              </p>

              <p style="margin:0 0 32px;font-size:15px;line-height:1.65;color:#3a434c;">
                If your need is more immediate, you can reach us directly at
                <a href="mailto:hello@evidentize.io" style="color:#0f7a5a;text-decoration:none;font-weight:500;">hello@evidentize.io</a>.
              </p>

              <!-- Divider -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr><td style="border-top:1px solid #e4e5de;"></td></tr>
              </table>

              <!-- What to expect -->
              <p style="margin:0 0 16px;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#6b7680;">
                What your demo covers
              </p>

              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding:5px 0;vertical-align:top;width:16px;">
                    <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background-color:#0f7a5a;margin-top:5px;"></span>
                  </td>
                  <td style="padding:4px 0 4px 8px;font-size:14px;line-height:1.55;color:#3a434c;">
                    A live assessment scenario from a discipline relevant to you
                  </td>
                </tr>
                <tr>
                  <td style="padding:5px 0;vertical-align:top;width:16px;">
                    <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background-color:#0f7a5a;margin-top:5px;"></span>
                  </td>
                  <td style="padding:4px 0 4px 8px;font-size:14px;line-height:1.55;color:#3a434c;">
                    The five-band verdict system applied to a real work submission
                  </td>
                </tr>
                <tr>
                  <td style="padding:5px 0;vertical-align:top;width:16px;">
                    <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background-color:#0f7a5a;margin-top:5px;"></span>
                  </td>
                  <td style="padding:4px 0 4px 8px;font-size:14px;line-height:1.55;color:#3a434c;">
                    The partner setup, white-label experience and cohort management tools
                  </td>
                </tr>
                <tr>
                  <td style="padding:5px 0;vertical-align:top;width:16px;">
                    <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background-color:#0f7a5a;margin-top:5px;"></span>
                  </td>
                  <td style="padding:4px 0 4px 8px;font-size:14px;line-height:1.55;color:#3a434c;">
                    How candidates carry and share their verified record after assessment
                  </td>
                </tr>
              </table>

              <!-- CTA button -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background-color:#0f7a5a;border-radius:9px;">
                    <a href="https://evidentize.io/platform" style="display:inline-block;padding:13px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.01em;">
                      Explore the platform &nbsp;→
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:15px;line-height:1.65;color:#3a434c;">
                Looking forward to speaking with you.
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
                You are receiving this because you requested a demo at
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

      </td>
    </tr>
  </table>

</body>
</html>
`

const confirmationText = (firstName: string, organisation: string) =>
  `Hi ${firstName},\n\nThank you for requesting a demo on behalf of ${organisation}. Your request has been received and a member of our team will be in touch within one business day to arrange a convenient time.\n\nIf your need is more immediate, reach us at hello@evidentize.io.\n\n— The Evidentize Team\nevidentize.io`

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, organisation, role, email, problem } = body

  if (!name || !organisation || !role || !email) {
    return Response.json({ error: 'Please complete all required fields.' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const firstName = (name as string).split(' ')[0]

  const notificationText = [
    `Name: ${name}`,
    `Organisation: ${organisation}`,
    `Role: ${role}`,
    `Email: ${email}`,
    problem ? `\nChallenge:\n${problem}` : '',
  ].filter(Boolean).join('\n')

  const notificationHtml = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Organisation:</strong> ${organisation}</p>
    <p><strong>Role:</strong> ${role}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${problem ? `<hr /><p><strong>Challenge:</strong><br />${(problem as string).replace(/\n/g, '<br />')}</p>` : ''}
  `

  // Notify the Evidentize inbox
  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.RESEND_TO_CONTACT!,
    replyTo: email,
    subject: `[Demo Request] ${name} — ${organisation}`,
    text: notificationText,
    html: notificationHtml,
  })

  if (error) {
    console.error('Resend error (demo notification):', error)
    return Response.json({ error: error.message ?? 'Failed to submit request. Please try again.' }, { status: 500 })
  }

  console.log('Demo notification sent, id:', data?.id)

  // Confirmation to the requester — fire and forget
  resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: email,
    subject: `Your demo request — Evidentize`,
    text: confirmationText(firstName, organisation),
    html: confirmationHtml(firstName, organisation),
  }).then(({ error: confErr }) => {
    if (confErr) console.error('Resend error (demo confirmation):', confErr)
  }).catch((err) => console.error('Resend demo confirmation unexpected error:', err))

  return Response.json({ success: true })
}
