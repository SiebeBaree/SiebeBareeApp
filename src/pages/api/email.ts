import {sendMail} from "@/services/mailService";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    } else {
        try {
            const {subject, email, name, message, token} = JSON.parse(req.body);

            const response = await verifyRecaptcha(token);
            if (response.success && response.score >= 0.5) {
                await sendMail(
                    `Contact From: ${subject}`,
                    process.env.TO_EMAIL || "siebe.baree@outlook.com",
                    `From: ${name} (${email})\n\n${message}`
                );
            } else {
                return res.json({
                    status: "ERROR",
                    message: "Failed captcha verification",
                });
            }

            res.status(200).json({
                status: "OK",
                message: "Email sent successfully",
            });
        } catch (err) {
            res.status(400).json({
                status: "ERROR",
                message: (err as Error).message,
            });
        }
    }
}

const verifyRecaptcha = async (token: string) => {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || "";

    const params = new URLSearchParams();
    params.append('secret', secretKey);
    params.append('response', token);

    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: "POST",
        body: params
    });
    return response.json();
};