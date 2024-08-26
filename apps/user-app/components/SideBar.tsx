"use client"
import { useRouter } from 'next/navigation'
import { IconType } from "react-icons";
import React from 'react'


export default function SideBar({ Icon, title, href }: { Icon: IconType, title: string, href: string }) {
    const router = useRouter()
    return (
        <div onClick={() => router.push(href)}>
            <div className="bg-slate-900 pr-20 p-4 py-3 rounded-lg cursor-pointer font-bold flex  gap-3 items-center">
                <Icon size={18}  />
                <div>
                    {title}
                </div>
            </div>
        </div>
    )
}
