// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mail from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

mail.setApiKey(process.env.SENDGRID_API_KEY)


type Data = {
  status: string
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.log(req.body)
    const { name, email, subject, message } = req.body
    
    const content = `
        Name: ${name}\r\n
        Email: ${email}\r\n
        Subject: ${subject}\r\n
        Message: ${message}

    `

    const data = {
        to: 'bigguy@bigguyautobody.com',
        from: `${email}`,
        subject: `${subject}`,
        text: content,
        html: content.replace(/\r\n/g, '<br />')
    }

    mail.send(data)

  res.status(200).json({ status: 'OK' })
}
