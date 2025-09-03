'use server';

import { redirect } from "next/navigation";
import { sendEmail } from "@/utils/notifications";

export async function submitOpportunityAdvertisement(formData: FormData) {

    console.log('FormData received:', Array.from(formData.entries()));


    const opportunityData = {
        title: String(formData.get('title')),
        city: String(formData.get('city')),
        zone: String(formData.get('zone')),
        photo: formData.get('photo') as File,
        investment: Number(formData.get('investment')),
        roi: Number(formData.get('roi')),
        months: Number(formData.get('months')),
        link: String(formData.get('link')),
        advertiserName: String(formData.get('advertiserName')),
        advertiserEmail: String(formData.get('advertiserEmail')),
    }

    const arrayBuffer = await opportunityData.photo.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await sendEmail({
        to: 'alejandrodelmedico@gmail.com',
        attachments: [{
            filename: opportunityData.photo.name,
            content: buffer,
            contentType: opportunityData.photo.type
        }],
        subject: `NUEVO ANUNCIO DE OPORTUNIDAD`,
        html: `
<div style="font-family: Arial, sans-serif; background: #f9fafb; padding: 32px;">
  <div style="background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); padding: 32px; max-width: 600px; margin: auto;">
    <pre style="white-space: pre-wrap; font-size: 1rem; background: #f3f4f6; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #e5e7eb;">
🔥 ¡NUEVA OPORTUNIDAD DE INVERSIÓN! 🔥

🏷️ ${opportunityData.title}
📍 ${opportunityData.city} - ${opportunityData.zone}
💰 Inversión Total: ${opportunityData.investment}€
📈 Rentabilidad (ROI): ${opportunityData.roi}%
⏳ Plazo: ${opportunityData.months} meses

🔗 Más info: ${opportunityData.link}

———
👤 Contacto del anunciante:
Nombre: ${opportunityData.advertiserName}
Email: ${opportunityData.advertiserEmail}
    </pre>
    <div style="color: #666; font-size: 0.95rem;">
      <p style="margin: 0 0 8px 0;">Puedes copiar el bloque de arriba y pegarlo directamente en WhatsApp.</p>
    </div>
  </div>
</div>
        `
    })

    redirect('/submit-opportunity/thank-you');
}