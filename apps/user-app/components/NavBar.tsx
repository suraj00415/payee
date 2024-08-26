"use client"
import { AppBar } from '@repo/ui/appbar';
import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
    const session = useSession()
    return (
        <AppBar user={session.data?.user} onSignIn={signIn} onSignOut={async () => {
            await signOut()
            await signIn()
        }} />
    )
}
