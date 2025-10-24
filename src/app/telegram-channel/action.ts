'use server';

import { createChatInviteLink } from "@/lib/telegram-bot";
import { sendEmail } from "@/utils/notifications";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function sendTelegramChannelInviteLink() {
    const { userId } = await auth();
    if (!userId)
        return { ok: false, message: "Usuario no autenticado" };

    const { firstName, lastName, primaryEmailAddress } = await currentUser();
    const email = primaryEmailAddress.emailAddress;

    // const userSubscription = await checkUserSubscription(userId);
    // console.log("User Subscription:", userSubscription);
    // return { ok: false, message: "Funcionalidad en desarrollo" };

    const inviteLinkResponse = await createChatInviteLink(email);
    const inviteLink = inviteLinkResponse.result.invite_link;
    await sendEmail({
        to: email,
        subject: 'Solicitud de invitación al canal privado de Telegram',
        html: `
            <p>Hola ${firstName} ${lastName}</p>
            <p>Gracias por tu interés en unirte a nuestro canal privado de Telegram de oportunidades inmobiliarias exclusivas.</p>
            <p>Puedes unirte al canal utilizando el siguiente enlace: <a href="${inviteLink}">Unirme al canal</a></p>
            <br />
            <p>Un saludo,</p>
            <p>El equipo de InversorHouse</p>
        `
    });

    return { ok: true, message: "¡Solicitud enviada! Recibirás la invitación en tu correo electrónico." };
}