'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'


export default function HubNavMenu({ user }: any) {
    const pathname = usePathname()

    return (
        <div className="w-[300px] py-5 border-r border-gray-700">
            <div className="flex justify-center">
                <img src="/logo.png" alt="Bloody ARK Logo" className="w-24 h-24 my-3 mx-3" />
            </div>
            <p className={`px-3 my-3 font-semibold`}><i className={`fa-solid fa-user mr-1`}></i> General</p>

            <div className={`hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-10 text-left ${pathname === "/hub" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                <Link href="/hub">
                    <i className={`fa-solid fa-home mr-2.5`}></i> Home
                </Link>
            </div>
            <div className={`hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-10 text-left ${pathname === "/test" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                <Link href="https://hub.bloody.gg/api/auth/login">
                    <i className={`fa-solid fa-cube mr-2.5`}></i> Bloody Hub ASE
                </Link>
            </div>
            <div className={`hidden hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-10 text-left ${pathname === "/hub/link-discord" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                <Link href="/hub">
                    <i className={`fa-brands fa-discord mr-2.5`}></i> Link Discord Account
                </Link>
            </div>
            {user?.role == 'SYSTEM' && <>
                <p className={`px-3 my-3 font-semibold`}><i className={`fa-solid fa-wrench mr-1`}></i> Admin Tools</p>
                <div className={`hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-10 text-left ${pathname === "/hub/users" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                    <Link href="/hub/users">
                        <i className={`fa-solid fa-users mr-2.5`}></i> Users
                    </Link>
                </div>
                <div className={`hidden hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-10 text-left ${pathname === "/hub/users" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                    <Link href="/hub/logs">
                        <i className={`fa-solid fa-exclamation-triangle mr-2.5`}></i> Logs
                    </Link>
                </div>
                <div className={`hidden hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-10 text-left ${pathname === "/hub/users" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                    <Link href="/hub/finder">
                        <i className={`fa-solid fa-search mr-2.5`}></i> Player & Tribe Finder
                    </Link>
                </div>
                <div className={`hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-10 text-left ${pathname === "/hub/cluster_manager" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                    <Link href="/hub/cluster_manager">
                    <i className={`fa-solid fa-database mr-2.5`}></i> Cluster Manager
                    </Link>
                </div>
                <div className={`hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-10 text-left ${pathname === "/hub/server_manager" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                    <Link href="/hub/server_manager">
                    <i className={`fa-solid fa-server mr-2.5`}></i> Server Manager
                    </Link>
                </div>
                <div className={`hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-10 text-left ${pathname === "/hub/page_editor" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                    <Link href="/hub/page_editor">
                    <i className={`fa-solid fa-server mr-2.5`}></i> Page Editor
                    </Link>
                </div>
                <button className={`hidden hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${false ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                    <i className={`fa-solid fa-cogs mr-2.5`}></i> Site Settings
                </button>
                <p className={`hidden px-3 my-3 font-semibold`}><i className={`fa-solid fa-box mr-1`}></i> Other</p>
                <button className={`hidden hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${false ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                    <i className={`fa-solid fa-info-circle mr-2.5`}></i> About
                </button>
            </>}
        </div>
    )
}