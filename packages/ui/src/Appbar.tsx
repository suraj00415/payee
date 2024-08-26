import { Button } from "./button";

interface AppBarProps {
    user?: {
        name?: string | null;
        email?: string | null
    },
    onSignIn: any,
    onSignOut: any
}

export const AppBar = ({
    user,
    onSignIn,
    onSignOut
}: AppBarProps) => {
    return (
        <div className="flex justify-between border-b border-slate-700 px-4">
            <div className="text-2xl flex flex-col justify-center bg-gradient-to-r from-teal-400 to-green-300 bg-clip-text text-transparent font-bold">
                Payee
            </div>
            <div className="text-white font-bold">{user?.email}</div>
            <div className="flex flex-col justify-center pt-2">
                <Button onClick={user ? onSignOut : onSignIn}>{user ? "Logout" : "Login"}</Button>
            </div>
        </div>
    )
}