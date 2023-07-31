import nodemailer from "nodemailer";

export async function sendMail(subject: string, toEmail: string, message: string) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASS,
        },
    });

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: toEmail,
        subject: subject,
        text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            throw new Error(error.message);
        } else {
            console.log(`Email send @ ${new Date().toISOString()}`);
            return true;
        }
    });
}