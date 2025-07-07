'use client';
// import { DashboardIcon } from "@/components/icons/Dashboard";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import { PhoneIcon } from "./icons/Phone";
export default function ClerkButton() {
    return (
        <div>
            <SignedOut>
                <SignInButton mode="modal">Acceso</SignInButton>
            </SignedOut>

            <SignedIn>
                <UserButton showName >
                    {/* <UserButton.MenuItems>
                        <UserButton.Link labelIcon={<DashboardIcon />} label="Dashboard" href="/dashboard" />
                    </UserButton.MenuItems> */}

                    {/* TODO: implementar lógica de teléfono */}
                    {/* <UserButton.UserProfilePage label="Teléfono" labelIcon={<PhoneIcon />} url="phone">
                        <div>
                            <h1>Página de Teléfono Personalizada</h1>
                            <p>Este es el contenido de la página de teléfono personalizada.</p>
                        </div>
                    </UserButton.UserProfilePage> */}
                </UserButton>
            </SignedIn>
        </div>
    );
}