'use server';
import nodemailer from 'nodemailer';

export type EmailData = {
    to: string;
    subject: string;
    html: string;
    cc?: string;
    bcc?: string;
    attachments?: nodemailer.SendMailOptions['attachments'];
};

export async function sendEmail({ to, subject, html, cc, bcc, attachments }: EmailData) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true para 465, false para otros puertos como 587
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions: nodemailer.SendMailOptions = {
        from: process.env.EMAIL_FROM,
        to,
        subject,
        html,
        cc,
        bcc,
        attachments
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email enviado correctamente');
    } catch (error) {
        console.error('Error al enviar el email:', error);
    }
}