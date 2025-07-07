'use client';
import { useIsMobile } from "@/hooks/useIsMobile";
// import { DashboardIcon } from "@/components/icons/Dashboard";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UserIcon } from "./icons/User";

// import { PhoneIcon } from "./icons/Phone";
export default function ClerkButton() {
    const isMobile = useIsMobile();

    return (
        <div>
            <SignedOut>
                <SignInButton mode="modal">{isMobile ? <UserIcon width={"1.8rem"} height={"1.8rem"} /> : "Acceso"}</SignInButton>
            </SignedOut>

            <SignedIn>
                <UserButton showName={!isMobile}>
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