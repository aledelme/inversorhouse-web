import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
export default function ClerkButton() {
    return (
        <div>
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
                <UserButton showName />
            </SignedIn>
        </div>
    );
}