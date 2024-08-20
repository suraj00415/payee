import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
        email?: string | null
    },
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between border-b border-slate-700 px-4">
        <div className="text-lg flex flex-col justify-center text-white font-bold">
            PayTM
        </div>
        <div className="text-white font-bold">{user?.email}</div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}