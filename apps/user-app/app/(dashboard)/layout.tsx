import SideBarMap from '../../components/SideBarMap';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <div className="flex gap-5">
            <div className=" border-r border-slate-700 h-screen pt-10 px-3  ">
                    <SideBarMap />
            </div>
            {children}
        </div>
    );
}