export default function PrivacidadTelegramChannelPage() {
    return (
        <section className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-blue-900">
                Política de Privacidad - Canal de Telegram InversorHouse
            </h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">1. Responsable del Tratamiento</h2>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Identidad:</strong> Andrés Iván Del Medico Bravo (Inversor House)</li>
                    <li><strong>NIF:</strong> 42242231V</li>
                    <li><strong>Dirección:</strong> Plaza de España s/n, CP 36920, Marín (Pontevedra).</li>
                    <li><strong>Email:</strong> <a href="mailto:atencion@inversorhouse.com" className="text-blue-600 hover:underline">atencion@inversorhouse.com</a></li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">2. Finalidad del Tratamiento de Datos</h2>
                <p className="mb-2 text-gray-700">
                    En Inversor House tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Gestionar el alta y la suscripción al canal privado de Telegram.</li>
                    <li>Tramitar los pagos a través de la pasarela Stripe.</li>
                    <li>Emitir las facturas legales correspondientes y gestionar la contabilidad a través de Quipu.</li>
                    <li>Enviar comunicaciones de soporte técnico o notificaciones importantes sobre el servicio.</li>
                    <li>En caso de que lo autorice, envío de nuevas ofertas o productos relacionados con la inversión inmobiliaria.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">3. Legitimación</h2>
                <p className="text-gray-700">
                    La base legal para el tratamiento de sus datos es la <strong>ejecución del contrato de suscripción</strong> que
                    el usuario acepta al contratar el servicio. El envío de comunicaciones comerciales se basa en el
                    consentimiento o interés legítimo, pudiendo ser revocado en cualquier momento.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">4. Plazo de Conservación</h2>
                <p className="text-gray-700">
                    Los datos personales se conservarán mientras se mantenga la relación de suscripción y, posteriormente,
                    durante los plazos legales exigidos por la normativa fiscal y civil española (generalmente <strong>5-6 años</strong> para
                    registros contables y fiscales).
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">5. Destinatarios y Transferencias</h2>
                <p className="mb-2 text-gray-700">
                    Sus datos no se cederán a terceros ajenos al servicio, salvo obligación legal. Para el funcionamiento
                    técnico, se utilizan los siguientes proveedores que pueden actuar como encargados del tratamiento:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Telegram:</strong> Para la prestación del servicio de mensajería.</li>
                    <li><strong>InviteMember:</strong> Para la gestión de accesos y membresías.</li>
                    <li><strong>Stripe:</strong> Para el procesamiento seguro de pagos (cumple con estándares PCI-DSS).</li>
                    <li><strong>Quipu:</strong> Para la gestión de facturación y obligaciones tributarias.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">6. Derechos del Usuario</h2>
                <p className="mb-2 text-gray-700">
                    Cualquier persona tiene derecho a obtener confirmación sobre si en Inversor House estamos tratando
                    datos personales que les conciernan. Usted tiene derecho a:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Acceder</strong> a sus datos personales.</li>
                    <li>Solicitar la <strong>rectificación</strong> de datos inexactos.</li>
                    <li>Solicitar su <strong>supresión</strong> cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</li>
                    <li>Solicitar la <strong>limitación u oposición</strong> de su tratamiento.</li>
                    <li><strong>Portabilidad</strong> de los datos.</li>
                </ul>
                <p className="mt-2 text-gray-700">
                    Para ejercer estos derechos, puede enviar un correo electrónico a{' '}
                    <a href="mailto:atencion@inversorhouse.com" className="text-blue-600 hover:underline">atencion@inversorhouse.com</a>{' '}
                    adjuntando una copia de su DNI para verificar su identidad.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">7. Seguridad de los Datos</h2>
                <p className="text-gray-700">
                    Inversor House aplica las medidas técnicas y organizativas necesarias para garantizar la
                    <strong> confidencialidad, integridad y disponibilidad</strong> de los datos personales tratados a través
                    de las herramientas mencionadas.
                </p>
            </section>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-600">
                    <strong>Fecha de última actualización:</strong> Enero 2026
                </p>
                <p className="text-sm text-gray-600 mt-1">
                    Para cualquier consulta sobre privacidad, puede contactarnos en{' '}
                    <a href="mailto:atencion@inversorhouse.com" className="text-blue-600 hover:underline">atencion@inversorhouse.com</a>
                </p>
            </div>
        </section>
    );
}
