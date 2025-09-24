'use server';

import { redirect } from "next/navigation";
import { EmailData, sendEmail } from "@/utils/notifications";
import { formatEUR } from "@/utils/functions";

export async function submitOpportunityAdvertisement(formData: FormData) {

  console.log('FormData received:', Array.from(formData.entries()));
  const opportunityData = {
    title: formData.get('title') ? String(formData.get('title')) : null,
    city: formData.get('city') ? String(formData.get('city')) : null,
    zone: formData.get('zone') ? String(formData.get('zone')) : null,
    photo: formData.get('photo') as File | null,
    investment: formData.get('investment') ? Number(formData.get('investment')) : null,
    roi: formData.get('roi') ? Number(formData.get('roi')) : null,
    months: formData.get('months') ? Number(formData.get('months')) : null,
    link: formData.get('link') ? String(formData.get('link')) : null,
    advertiserName: formData.get('advertiserName') ? String(formData.get('advertiserName')) : null,
    advertiserEmail: formData.get('advertiserEmail') ? String(formData.get('advertiserEmail')) : null,
  }
  // Build dynamic content
  const contentLines = ['🔥 ¡OPORTUNIDAD DE INVERSIÓN!', ''];

  if (opportunityData.title) {
    contentLines.push(`✅ ${opportunityData.title}`);
  }

  if (opportunityData.city || opportunityData.zone) {
    let location = '📍 ';
    if (opportunityData.city) location += opportunityData.city;
    if (opportunityData.city && opportunityData.zone) location += ' - ';
    if (opportunityData.zone) location += opportunityData.zone;
    contentLines.push(location);
  }

  if (opportunityData.investment) {
    contentLines.push(`💰 Inversión Total: ${formatEUR(opportunityData.investment)}`);
  }

  if (opportunityData.roi) {
    contentLines.push(`📈 Rentabilidad (ROI): ${opportunityData.roi}%`);
  }

  if (opportunityData.months) {
    contentLines.push(`⏳ Plazo: ${opportunityData.months} meses`);
  }

  if (opportunityData.link) {
    contentLines.push('', `🔗 Más info: ${opportunityData.link}`);
  }

  if (opportunityData.advertiserName || opportunityData.advertiserEmail) {
    contentLines.push('', '———', '👤 Contacto del anunciante:');
    if (opportunityData.advertiserName) {
      contentLines.push(`Nombre: ${opportunityData.advertiserName}`);
    }
    if (opportunityData.advertiserEmail) {
      contentLines.push(`Email: ${opportunityData.advertiserEmail}`);
    }
  }

  const emailOptions: EmailData = {
    to: 'alejandrodelmedico@gmail.com, andresdelmedicobravo@gmail.com',
    subject: `NUEVO ANUNCIO DE OPORTUNIDAD`,
    html: `
<div style="font-family: Arial, sans-serif; background: #f9fafb; padding: 32px;">
  <div style="background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); padding: 32px; max-width: 600px; margin: auto;">
    <pre style="white-space: pre-wrap; font-size: 1rem; background: #f3f4f6; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #e5e7eb;">
      ${contentLines.join('\n')}
    </pre>
    <div style="color: #666; font-size: 0.95rem;">
      <p style="margin: 0 0 8px 0;">Puedes copiar el bloque de arriba y pegarlo directamente en WhatsApp.</p>
    </div>
  </div>
</div>
        `
  };

  // Add attachment only if photo exists
  if (opportunityData.photo && opportunityData.photo.size > 0) {
    const arrayBuffer = await opportunityData.photo.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    emailOptions.attachments = [{
      filename: opportunityData.photo.name,
      content: buffer,
      contentType: opportunityData.photo.type
    }];
  }

  await sendEmail(emailOptions)

  redirect('/submit-opportunity/thank-you');
}