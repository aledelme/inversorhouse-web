export default function PoliticaPrivacidadPage() {
    return (
        <section className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-blue-900">Política de Privacidad de InversorHouse</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">1. Responsable del Tratamiento de sus Datos</h2>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Denominación Social:</strong> [Razón social completa de la empresa]</li>
                    <li><strong>NIF:</strong> [Número de Identificación Fiscal]</li>
                    <li><strong>Domicilio Social:</strong> [Dirección fiscal completa]</li>
                    <li><strong>Correo Electrónico de Contacto:</strong> info@inversorhouse.com</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">2. ¿Qué datos personales tratamos y para qué?</h2>
                <p className="mb-2 text-gray-700">En InversorHouse tratamos los datos personales que nos facilitas a través del formulario de registro en nuestro Sitio Web.</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Datos recopilados:</strong> Nombre, apellidos, dirección de correo electrónico y número de teléfono.</li>
                    <li><strong>Finalidad del tratamiento:</strong>
                        <ul className="list-decimal pl-6 space-y-1">
                            <li>Gestionar tu alta como usuario registrado en la plataforma.</li>
                            <li>Permitirte el acceso y la interacción con las oportunidades de inversión publicadas.</li>
                            <li>Contactarte por vía telefónica o correo electrónico para proporcionarte información sobre las oportunidades por las que has mostrado interés y resolver tus dudas.</li>
                            <li>Gestionar la relación precontractual o contractual derivada de tu interés en nuestros servicios.</li>
                            <li>Cumplir con las obligaciones legales aplicables.</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">3. Base de legitimación para el tratamiento</h2>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>El consentimiento expreso que nos otorgas al marcar la casilla de aceptación de la política de privacidad antes de completar el registro (artículo 6.1.a del RGPD).</li>
                    <li>La necesidad de aplicar medidas precontractuales a petición tuya, al solicitar información sobre las oportunidades de inversión (artículo 6.1.b del RGPD).</li>
                </ul>
                <p className="mt-2 text-gray-700">Puedes retirar tu consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">4. Encargado del tratamiento y cesión de datos</h2>
                <p className="mb-2 text-gray-700">
                    Para la gestión del registro y la custodia de los datos personales, InversorHouse utiliza los servicios de Clerk.com (Clerk, Inc.), que actúa como Encargado del Tratamiento. Clerk procesa los datos en nuestro nombre y siguiendo nuestras instrucciones, con todas las garantías de seguridad y confidencialidad exigidas por el RGPD.
                </p>
                <p className="text-gray-700">
                    InversorHouse no cederá tus datos personales a terceros sin tu consentimiento expreso previo, salvo que exista una obligación legal.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">5. Plazo de conservación de los datos</h2>
                <p className="text-gray-700">
                    Tus datos personales serán conservados mientras mantengas tu condición de usuario registrado en la plataforma. Una vez solicites la baja, tus datos serán bloqueados y conservados únicamente durante los plazos legales establecidos para la atención de posibles responsabilidades (generalmente, hasta 6 años por normativa mercantil y fiscal).
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2 text-blue-800">6. ¿Cuáles son tus derechos?</h2>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Derecho de Acceso:</strong> Saber qué datos tuyos estamos tratando.</li>
                    <li><strong>Derecho de Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
                    <li><strong>Derecho de Supresión (al olvido):</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
                    <li><strong>Derecho de Oposición:</strong> Oponerte al tratamiento de tus datos.</li>
                    <li><strong>Derecho a la Limitación del Tratamiento:</strong> Solicitar que suspendamos el tratamiento de tus datos en determinadas circunstancias.</li>
                    <li><strong>Derecho a la Portabilidad de los Datos:</strong> Recibir tus datos en un formato estructurado, de uso común y lectura mecánica.</li>
                </ul>
                <p className="mt-2 text-gray-700">
                    Puedes ejercer estos derechos enviando una solicitud por correo electrónico a <strong>info@inversorhouse.com</strong>, indicando el derecho que deseas ejercer y adjuntando una copia de tu DNI o documento identificativo equivalente.
                </p>
                <p className="mt-2 text-gray-700">
                    Si consideras que tus derechos no han sido debidamente atendidos, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).
                </p>
            </section>
        </section>
    );
}
