export default function CookiesPage() {
    return (
        <section className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-blue-900">Política de Cookies de InversorHouse</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">1. ¿Qué son las cookies?</h2>
                <p className="text-gray-700">
                    Una cookie es un pequeño fichero de texto que un sitio web almacena en el navegador del usuario. Las cookies facilitan el uso y la navegación por una página web y son esenciales para el funcionamiento de internet, aportando innumerables ventajas en la prestación de servicios interactivos.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">2. ¿Qué tipo de cookies utiliza este sitio web?</h2>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>
                        <strong>No utilizamos cookies propias ni de terceros</strong> con fines de análisis de comportamiento, publicitarios o de seguimiento. No monitorizamos tu actividad en nuestra web ni creamos perfiles de usuario.
                    </li>
                    <li>
                        <strong>Posibles cookies técnicas o esenciales:</strong> Es posible que el funcionamiento del Sitio Web y de las herramientas que utilizamos, como el sistema de registro de usuarios proporcionado por Clerk, requieran el uso de cookies estrictamente necesarias para la prestación del servicio. Estas cookies son esenciales para:
                        <ul className="list-decimal pl-6 space-y-1">
                            <li>Gestionar la sesión del usuario una vez se ha registrado.</li>
                            <li>Mantener la seguridad de la conexión.</li>
                            <li>Permitir el correcto funcionamiento técnico de la plataforma.</li>
                        </ul>
                        <span className="block mt-2">Estas cookies técnicas no requieren el consentimiento informado del usuario, ya que están exentas del deber de información según la normativa vigente.</span>
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">3. Gestión de cookies en su navegador</h2>
                <p className="text-gray-700">
                    Aunque este sitio web no utiliza cookies de seguimiento, puedes configurar tu navegador para ser avisado de la recepción de cookies y para impedir su instalación en tu equipo. A través de la configuración de tu navegador puedes bloquearlas o eliminarlas.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2 text-blue-800">4. Conclusión</h2>
                <p className="text-gray-700">
                    En InversorHouse, tu privacidad es una prioridad. Hemos diseñado nuestra web para que puedas explorar oportunidades de inversión sin que tu navegación sea rastreada.
                </p>
            </section>
        </section>
    );
}