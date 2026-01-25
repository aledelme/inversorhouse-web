import { redirect } from 'next/navigation'
import Link from 'next/link'
import { stripe } from '@/lib/stripe'

export default async function Success({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
    const { session_id } = await searchParams

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const {
        status,
        customer_details
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })

    const customerEmail = customer_details?.email

    if (status === 'open') {
        return redirect('/')
    }

    if (status === 'complete') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center px-6 py-20">
                <div className="max-w-2xl w-full">
                    {/* Success Card */}
                    <div className="card p-8 md:p-12 text-center">
                        {/* Success Icon */}
                        <div className="mb-8">
                            <div className="relative inline-flex">
                                <div className="absolute inset-0 bg-success/20 blur-2xl rounded-full"></div>
                                <div className="relative w-24 h-24 bg-success/10 rounded-full flex items-center justify-center border-4 border-success/20">
                                    <svg className="w-12 h-12 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            ¡Pago Completado con Éxito!
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg text-muted mb-8">
                            Gracias por unirte al canal de oportunidades de InversorHouse.
                        </p>

                        {/* Email notification box */}
                        <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6 mb-8">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-primary">Revisa tu correo electrónico</h3>
                            </div>
                            <p className="text-muted">
                                Hemos enviado un email de confirmación a{' '}
                                <span className="font-semibold text-secondary">{customerEmail}</span>{' '}
                                con el enlace para unirte al canal de Telegram.
                            </p>
                        </div>

                        {/* Next steps */}
                        <div className="text-left bg-primary/5 rounded-xl p-6 mb-8">
                            <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Próximos pasos
                            </h3>
                            <ol className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                    <span className="text-muted">Abre el email que te hemos enviado</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                    <span className="text-muted">Haz clic en el enlace de invitación al canal</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                    <span className="text-muted">¡Empieza a recibir oportunidades exclusivas!</span>
                                </li>
                            </ol>
                        </div>

                        {/* Warning box */}
                        <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-8">
                            <p className="text-sm text-muted flex items-start gap-2">
                                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span>
                                    <strong>Importante:</strong> El enlace de invitación es personal e intransferible.
                                    Solo puede ser usado una vez y expira en 30 días.
                                </span>
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="btn btn-primary px-8 py-3"
                            >
                                Volver al Inicio
                            </Link>
                            <a
                                href="mailto:atencion@inversorhouse.com"
                                className="btn btn-outline px-8 py-3"
                            >
                                ¿Necesitas Ayuda?
                            </a>
                        </div>
                    </div>

                    {/* Footer text */}
                    <p className="text-center text-sm text-muted mt-8">
                        Si no recibes el email en los próximos minutos, revisa tu carpeta de spam o escribenos a{' '}
                        <a href="mailto:atencion@inversorhouse.com" className="text-secondary hover:underline">
                            atencion@inversorhouse.com
                        </a>.
                    </p>
                </div>
            </div>
        )
    }

    // Default return for other statuses
    return redirect('/')
}