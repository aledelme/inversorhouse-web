
const baseStyles = `
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 40px 20px; text-align: center; }
    .header img { max-width: 180px; height: auto; }
    .header h1 { color: #ffffff; margin: 20px 0 0 0; font-size: 24px; font-weight: 600; }
    .content { padding: 40px 30px; color: #333333; line-height: 1.6; }
    .content h2 { color: #1a1a2e; margin-top: 0; font-size: 22px; }
    .content p { margin: 16px 0; font-size: 16px; }
    .button { display: inline-block; background: linear-gradient(135deg, #0088cc 0%, #005f8c 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 20px 0; }
    .button:hover { background: linear-gradient(135deg, #006699 0%, #004d73 100%); }
    .info-box { background-color: #f8f9fa; border-left: 4px solid #0088cc; padding: 16px 20px; margin: 24px 0; border-radius: 0 8px 8px 0; }
    .info-box p { margin: 0; font-size: 14px; color: #555555; }
    .footer { background-color: #1a1a2e; padding: 30px 20px; text-align: center; }
    .footer p { color: #888888; font-size: 12px; margin: 8px 0; }
    .footer a { color: #0088cc; text-decoration: none; }
    .divider { height: 1px; background-color: #e0e0e0; margin: 24px 0; }
    .highlight { color: #0088cc; font-weight: 600; }
    .telegram-icon { font-size: 48px; margin-bottom: 16px; }
`;

interface WelcomeEmailParams {
    userName: string;
    inviteLink: string;
    websiteUrl?: string;
}

/**
 * Genera el HTML del email de bienvenida con el enlace de invitación al canal de Telegram
 */
export function generateWelcomeEmail({ userName, inviteLink, websiteUrl = 'https://inversorhouse.com' }: WelcomeEmailParams): string {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¡Bienvenido al Canal de Oportunidades!</title>
    <style>${baseStyles}</style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>¡Bienvenido al Canal de Oportunidades!</h1>
        </div>
        
        <div class="content">
            <h2>Hola ${userName || 'Inversor'},</h2>
            
            <p>¡Gracias por unirte a nuestra comunidad! Tu suscripción ha sido activada correctamente y ya tienes acceso a nuestro <span class="highlight">canal exclusivo de Telegram</span>.</p>
            
            <p>En este canal recibirás:</p>
            <ul>
                <li>🏠 Oportunidades de inversión inmobiliaria exclusivas</li>
                <li>📊 Conoce a inversores profesionales del sector inmobiliario</li>
                <li>💡 Conecta con inversores de todos los perfiles</li>
                <li>🔔 Alertas de nuevas oportunidades antes que nadie</li>
            </ul>
            
            <div style="text-align: center; margin: 32px 0;">
                <a href="${inviteLink}" class="button" style="color: #ffffff;">
                    📱 Unirse al Canal de Telegram
                </a>
            </div>
            
            <div class="info-box">
                <p><strong>⚠️ Importante:</strong> Este enlace es personal e intransferible. Solo puede ser usado una vez y expira en 30 días. Por favor, únete al canal lo antes posible.</p>
            </div>
            
            <div class="divider"></div>
            
            <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos respondiendo a este email.</p>
            
            <p>¡Bienvenido a bordo!<br>
            <strong>El equipo de InversorHouse</strong></p>
        </div>
        
        <div class="footer">
            <p>© ${new Date().getFullYear()} InversorHouse. Todos los derechos reservados.</p>
            <p><a href="${websiteUrl}">Visitar nuestra web</a></p>
        </div>
    </div>
</body>
</html>
    `.trim();
}

interface FarewellEmailParams {
    userName: string;
    websiteUrl?: string;
}

/**
 * Genera el HTML del email de despedida cuando se cancela la suscripción
 */
export function generateFarewellEmail({ userName, websiteUrl = 'https://inversorhouse.com' }: FarewellEmailParams): string {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasta pronto - InversorHouse</title>
    <style>${baseStyles}</style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Te echaremos de menos</h1>
        </div>
        
        <div class="content">
            <h2>Hola ${userName || 'Inversor'},</h2>
            
            <p>Lamentamos verte partir. Tu suscripción al canal de oportunidades de InversorHouse ha sido cancelada.</p>
            
            <p>A partir de este momento:</p>
            <ul>
                <li>❌ Tu acceso al canal de Telegram ha sido revocado</li>
                <li>❌ Ya no recibirás las oportunidades exclusivas</li>
            </ul>
            
            <div class="info-box">
                <p><strong>¿Fue un error?</strong> Si cancelaste por accidente o cambiaste de opinión, puedes volver a suscribirte en cualquier momento desde nuestra web.</p>
            </div>
            
            <div style="text-align: center; margin: 32px 0;">
                <a href="${websiteUrl}/telegram-channel" class="button" style="color: #ffffff;">
                    🔄 Volver a Suscribirse
                </a>
            </div>
            
            <div class="divider"></div>
            
            <p>Nos encantaría saber cómo podemos mejorar. Si tienes un momento, responde a este email con tus comentarios.</p>
            
            <p>Gracias por haber sido parte de nuestra comunidad.<br>
            <strong>El equipo de InversorHouse</strong></p>
        </div>
        
        <div class="footer">
            <p>© ${new Date().getFullYear()} InversorHouse. Todos los derechos reservados.</p>
            <p><a href="${websiteUrl}">Visitar nuestra web</a></p>
        </div>
    </div>
</body>
</html>
    `.trim();
}
