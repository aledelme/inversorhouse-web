"use client";
import Image from "next/image";

export default function AboutUsSection() {
    return (
        <section id="conocenos" className="w-full py-20">
            <div className="container-base">
                <div className="text-center mb-16">
                    <h2 className="heading-2 text-primary mb-4">
                        Conócenos
                    </h2>
                    <p className="text-xl text-muted max-w-3xl mx-auto">
                        Somos el equipo pionero en democratizar la inversión inmobiliaria en España
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Content */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-professional p-6 sm:p-8 border border-surface-border">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-primary">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-primary mb-2">
                                        Nuestra Misión
                                    </h3>
                                    <p className="text-foreground/80 leading-relaxed">
                                        En <span className="font-bold text-secondary">InversorHouse</span> democratizamos
                                        el acceso a inversiones inmobiliarias de calidad, permitiendo a cualquier persona
                                        participar en operaciones de alto potencial tradicionalmente reservadas para grandes capitales.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-xl">
                                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-secondary">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-primary mb-2">
                                        Nuestro Compromiso
                                    </h3>
                                    <p className="text-foreground/80 leading-relaxed">
                                        Seleccionamos y analizamos minuciosamente cada oportunidad para que puedas
                                        invertir de forma segura, diversificada y con total transparencia en el proceso.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        {/* <div className="grid grid-cols-3 gap-3 sm:gap-4">
                            <div className="text-center p-3 sm:p-4 bg-primary/5 rounded-xl border border-primary/10">
                                <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                                <div className="text-xs sm:text-sm text-muted">Años experiencia</div>
                            </div>
                            <div className="text-center p-3 sm:p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                                <div className="text-xl sm:text-2xl font-bold text-secondary">100%</div>
                                <div className="text-xs sm:text-sm text-muted">Transparencia</div>
                            </div>
                            <div className="text-center p-3 sm:p-4 bg-success/5 rounded-xl border border-success/10">
                                <div className="text-xl sm:text-2xl font-bold text-success">24/7</div>
                                <div className="text-xs sm:text-sm text-muted">Soporte</div>
                            </div>
                        </div> */}
                    </div>

                    {/* Image & Team */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8 text-center">
                            <div className="relative inline-block mb-6">
                                <Image
                                    src="/logo.png"
                                    alt="Logo InversorHouse"
                                    width={120}
                                    height={120}
                                    className="rounded-full border-4 border-white shadow-professional mx-auto"
                                />
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-white flex items-center justify-center">
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-white">
                                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-primary mb-2">
                                InversorHouse
                            </h3>
                            <p className="text-muted mb-6">
                                Expertos en inversión inmobiliaria
                            </p>

                            <div className="space-y-4 text-left max-w-sm mx-auto">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                    <span className="text-sm text-foreground/80">Análisis riguroso de cada oportunidad</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                                    <span className="text-sm text-foreground/80">Gestión integral de la inversión</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                                    <span className="text-sm text-foreground/80">Seguimiento continuo y asesoramiento</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
