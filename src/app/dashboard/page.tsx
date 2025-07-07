import { auth } from "@clerk/nextjs/server";

export default async function Page() {
    const { userId, redirectToSignIn } = await auth()

    if (!userId) return redirectToSignIn()

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
            <p className="text-lg">This is the dashboard page.</p>
            <h1>Hello, {userId}</h1>
        </div>
    );
}