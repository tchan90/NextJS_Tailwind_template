// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {
	successful: boolean;
	error?: object;
};

type Body = {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	message: string;
};

const messageTemplate = (body: Body) => {
	return `
    Name: ${body.firstName} ${body.lastName}\r\n
    Phone: ${body.phone || "N/A"}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
};

async function sendEmail(req: NextApiRequest, res: NextApiResponse<Data>) {
	const body = JSON.parse(req.body);
	const msg = messageTemplate(body);
	try {
		await sendgrid.send({
			to: process.env.TO_EMAIL,
			from: process.env.FROM_EMAIL,
			subject: "New message from your website",
			text: msg,
			html: msg.replace(/\r\n/g, "<br>"),
			// mail_settings: {
			// 	sandbox_mode: {
			// 		enable: true,
			// 	},
			// },
		});

		return res.status(200).json({ successful: true, error: {} });
	} catch (e) {
		return res.status(404).json({ successful: false, error: { e } });
	}
}

export default sendEmail;
