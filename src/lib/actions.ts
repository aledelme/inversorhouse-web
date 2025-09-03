'use server';

import { sendEmail } from "@/utils/notifications";
import { auth, currentUser } from "@clerk/nextjs/server";
import { IOpportunity } from "./models/Opportunity";
import { IFixIncome } from "./models/FixIncome";
import { IHighVolumen } from "./models/HighVolumen";

export async function sendOffer(op: IOpportunity, formData: FormData) {
    const { userId } = await auth();
    if (!userId)
        return { ok: false, message: "Usuario no autenticado" };

    const offerData = {
        phone: formData.get('phone'),
        terms: formData.get('terms') === 'on',
    }

    if (!offerData.phone || !offerData.terms)
        return { ok: false, message: "Datos de oferta incompletos" };


    const { firstName, lastName, primaryEmailAddress } = await currentUser();
    const email = primaryEmailAddress.emailAddress
    await sendEmail({
        to: email,
        bcc: 'inversorhouse@gmail.com',
        subject: `Has ofertado por ${op.sub_property_type} en ${op.city}`,
        html: `
            <p>Hola ${firstName} ${lastName}</p>
            <p>Gracias por ofertar por ${op.sub_property_type} en ${op.city}.</p>
            <p>La dirección del inmueble es: ${op.address}.</p>
            <p>En breve nos pondremos en contacto contigo a través del teléfono que nos has facilitado <b>${offerData.phone}</b> para discutir los detalles de tu oferta.</p>
            <br />
            <p>Un saludo,</p>
            <p>El equipo de Inversor House</p>
        `
    })
    return { ok: true, message: "¡Gracias! Hemos recibido tu solicitud pronto nos pondremos en contacto contigo." };
}

export async function sendCoinvestment(op: IOpportunity, formData: FormData) {
    const { userId } = await auth();
    if (!userId)
        return { ok: false, message: "Usuario no autenticado" };

    const investmentData = {
        phone: formData.get('phone'),
        amount: formData.get('amount'),
        terms: formData.get('terms') === 'on',
        isGestor: formData.get('isGestor') === 'true',
    }

    if (!investmentData.phone || !investmentData.amount || !investmentData.terms) {
        return { ok: false, message: "Datos de coinversión incompletos" };
    }

    const { firstName, lastName, primaryEmailAddress } = await currentUser();
    const email = primaryEmailAddress.emailAddress
    await sendEmail({
        to: email,
        bcc: 'inversorhouse@gmail.com',
        subject: `Te has apuntado a ${investmentData.isGestor ? "gestionar" : "coinvertir"} en ${op.sub_property_type} en ${op.city}`,
        html: `
            <p>Hola ${firstName} ${lastName}</p>
            <p>Gracias por apuntarte a ${investmentData.isGestor ? "gestionar" : "coinvertir"} en ${op.sub_property_type} en ${op.city} con una partición de <b>${investmentData.amount} €</b>.</p>
            <p>La dirección del inmueble es: ${op.address}.</p>
            <p>En breve nos pondremos en contacto contigo a través del teléfono que nos has facilitado <b>${investmentData.phone}</b> para discutir los detalles de tu inversión.</p>
            <br />
            <p>Un saludo,</p>
            <p>El equipo de Inversor House</p>
        `
    })
    return { ok: true, message: "¡Gracias! Hemos recibido tu solicitud pronto nos pondremos en contacto contigo." };
}


export async function sendFixIncome(op: IFixIncome, formData: FormData) {
    const { userId } = await auth();
    if (!userId)
        return { ok: false, message: "Usuario no autenticado" };

    const investmentData = {
        phone: formData.get('phone'),
        terms: formData.get('terms') === 'on',
    }

    if (!investmentData.phone || !investmentData.terms) {
        return { ok: false, message: "Datos de coinversión incompletos" };
    }

    const { firstName, lastName, primaryEmailAddress } = await currentUser();
    const email = primaryEmailAddress.emailAddress
    await sendEmail({
        to: email,
        bcc: 'inversorhouse@gmail.com',
        subject: `Te has apuntado a coinvertir en ${op.property_type} en ${op.city}`,
        html: `
            <p>Hola ${firstName} ${lastName}</p>
            <p>Gracias por apuntarte a coinvertir en la financiación de ${op.property_type} en ${op.city}</b>.</p>
            <p>En breve nos pondremos en contacto contigo a través del teléfono que nos has facilitado <b>${investmentData.phone}</b> para discutir los detalles de tu inversión.</p>
            <br />
            <p>Un saludo,</p>
            <p>El equipo de Inversor House</p>
        `
    })
    return { ok: true, message: "¡Gracias! Hemos recibido tu solicitud pronto nos pondremos en contacto contigo." };
}


export async function sendHighVolumen(op: IHighVolumen, formData: FormData) {
    const { userId } = await auth();
    if (!userId)
        return { ok: false, message: "Usuario no autenticado" };

    const investmentData = {
        phone: formData.get('phone'),
        terms: formData.get('terms') === 'on',
    }

    if (!investmentData.phone || !investmentData.terms) {
        return { ok: false, message: "Datos de coinversión incompletos" };
    }

    const { firstName, lastName, primaryEmailAddress } = await currentUser();
    const email = primaryEmailAddress.emailAddress
    await sendEmail({
        to: email,
        bcc: 'inversorhouse@gmail.com',
        subject: `Te has apuntado a interesado por ${op.city}`,
        html: `
            <p>Hola ${firstName} ${lastName}</p>
            <p>Gracias por interesarte por ${op.city}</b>.</p>
            <p>En breve nos pondremos en contacto contigo a través del teléfono que nos has facilitado <b>${investmentData.phone}</b> para discutir los detalles de tu inversión.</p>
            <br />
            <p>Un saludo,</p>
            <p>El equipo de Inversor House</p>
        `
    })
    return { ok: true, message: "¡Gracias! Hemos recibido tu solicitud pronto nos pondremos en contacto contigo." };
}