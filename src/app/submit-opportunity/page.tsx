"use client";

import React, { useState, useRef, useEffect } from "react";
import { submitOpportunityAdvertisement } from "./action";


// Small presentational input component
function TextField({ label, name, placeholder, type = "text", inputMode, required = false }: {
    label: string;
    name: string;
    placeholder?: string;
    type?: string;
    inputMode?: React.InputHTMLAttributes<HTMLInputElement>["inputMode"];
    required?: boolean;
}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label} {required && <span className="text-red-500">*</span>}</label>
            <input name={name} placeholder={placeholder} type={type} inputMode={inputMode} required
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3" />
        </div>
    );
}

function ErrorBox({ errors }: { errors: string[] }) {
    if (!errors.length) return null;
    return (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
            <ul className="list-disc list-inside">
                {errors.map((err, i) => <li key={i}>{err}</li>)}
            </ul>
        </div>
    );
}

function FilePicker({ fileInputRef, photoPreview, onChange }: {
    fileInputRef: React.RefObject<HTMLInputElement>;
    photoPreview: string | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">Foto Principal <span className="text-red-500">*</span></label>
            <div className="mt-2 flex items-center gap-4">
                <div className="flex-shrink-0">
                    <div className="h-28 w-40 rounded-md border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden">
                        {photoPreview ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={photoPreview} alt="Preview" className="h-full w-full object-cover" />
                        ) : (
                            <span className="text-xs text-gray-400">Previsualización</span>
                        )}
                    </div>
                </div>

                <div className="flex flex-1 flex-col">
                    <input ref={fileInputRef} name="photo" type="file" accept="image/*" onChange={onChange} className="text-sm text-gray-600" required />
                    <p className="mt-2 text-xs text-gray-500">Sube la imagen más atractiva (fachada, salón con render, etc.). Máx. 2 MB. Formatos: jpg, png, webp.</p>
                </div>
            </div>
        </div>
    );
}

export default function SubmitOpportunityPage() {
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [errors, setErrors] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // refs
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!photoFile) {
            setPhotoPreview(null);
            return;
        }
        const url = URL.createObjectURL(photoFile);
        setPhotoPreview(url);
        return () => URL.revokeObjectURL(url);
    }, [photoFile]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0] ?? null;
        if (f) {
            if (!f.type.startsWith("image/")) {
                setErrors(["El archivo debe ser una imagen (jpg, png, webp)."]);
                if (fileInputRef.current) fileInputRef.current.value = "";
                setPhotoFile(null);
                return;
            }
            if (f.size > 2 * 1024 * 1024) {
                setErrors(["La imagen no puede superar 2 MB."]);
                if (fileInputRef.current) fileInputRef.current.value = "";
                setPhotoFile(null);
                return;
            }
        }
        setErrors([]);
        setPhotoFile(f);
    };


    return (
        <section className="flex w-full flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-3xl rounded-xl bg-white/60 backdrop-blur-md border border-gray-200 p-6 shadow-md">
                <h1 className="text-3xl font-semibold text-gray-800 text-center">Formulario de Oportunidades</h1>
                <p className="mt-1 text-sm text-gray-600 text-center">Anuncia tus oportunidades en nuestro canal privado de inversores.</p>

                <form action={submitOpportunityAdvertisement}
                    className="mt-6 grid grid-cols-1 gap-6"
                    onSubmit={() => setIsSubmitting(true)}>
                    <TextField label="Título de la Oportunidad" name="title" placeholder="Flip & Profit en el Barrio de Salamanca" required />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField label="Ciudad" name="city" placeholder="Madrid" required />
                        <TextField label="Barrio / Zona" name="zone" placeholder="Barrio Salamanca" required />
                    </div>

                    <FilePicker fileInputRef={fileInputRef} photoPreview={photoPreview} onChange={handleFileChange} />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <TextField label="Inversión Total Estimada (€)" type="number" name="investment" placeholder="120000" inputMode="numeric" required />
                        <TextField label="Rentabilidad Estimada (ROI %)" type="number" name="roi" placeholder="18" inputMode="numeric" required />
                        <TextField label="Plazo Estimado (meses)" type="number" name="months" placeholder="18" inputMode="numeric" required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Enlace para más información y de contacto <span className="text-red-500">*</span></label>
                        <input name="link" type="url" inputMode="url" placeholder="https://drive.google.com/drive/...." className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3" />
                        <p className="mt-1 text-xs text-gray-500">Puede ser carpeta de Google Drive, PDF, ficha, etc.</p>
                    </div>

                    <h2 className="mb-0! text-2xl">Información del Anunciante</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField label="Nombre del Anunciante" name="advertiserName" placeholder="Nombre y apellidos / empresa" required />
                        <TextField label="Email del Anunciante" name="advertiserEmail" type="email" placeholder="contacto@empresa.com" required />
                    </div>

                    {/* hidden input for reCAPTCHA token filled by client before native submit */}
                    {/* <input name="recaptchaToken" ref={recaptchaInputRef} /> */}
                    {/* <div className="g-recaptcha" data-sitekey="your_site_key"></div> */}

                    <ErrorBox errors={errors} />

                    <div className="flex items-center justify-between gap-4">
                        <button
                            type="submit"
                            className="btn btn-primary flex items-center gap-2"
                            disabled={isSubmitting}
                        >
                            {isSubmitting && (
                                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                </svg>
                            )}
                            {isSubmitting ? "Enviando..." : "Enviar"}
                        </button>
                        <div className="text-sm text-gray-500">Al pulsar Enviar, nuestro equipo revisará el anuncio para comprobar que cumple con nuestros estándares antes de ser publicado.</div>
                    </div>
                </form>
            </div>
        </section>
    );
}