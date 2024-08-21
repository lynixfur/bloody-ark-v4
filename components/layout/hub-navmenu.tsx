'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import ClusterSelector from "../cluster_selector/ClusterSelector";



export default function HubNavMenu({ user }: any) {
    const pathname = usePathname()
    const [hubDropdown, setHubDropdown] = useState(false);
    const handleHubDropdown = () => setHubDropdown(!hubDropdown);


    return (
        <div className="w-[300px] py-5 border-r border-gray-700">
            <div className="flex my-5 px-3">
                <div className="ml-2">
                    <img src="/logo.png" alt="Bloody ARK Logo" className="w-12 h-12" />
                </div>

                <div className="relative flex-1">
                    {/* Dropdown Trigger */}
                    <button onClick={handleHubDropdown} className="flex justify-right flex-row items-center w-full px-4 text-md font-semibold text-left">
                        <div className="flex-1"></div> {/* Spacer */}
                        <span className="font-semibold text-xl text-white">
                            {user?.name}
                        </span>
                        <img className="h-10 w-10 ml-3 border border-gray-600" src={user?.image} alt={user?.name} />
                    </button>
                    {/* Dropdown */}
                    <div className={hubDropdown ? 'absolute z-50 mt-3 w-full rounded-md shadow-lg origin-top-right right-0' : 'hidden z-50 mt-3 w-48 rounded-md shadow-lg origin-top-right right-0'}>
                        <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-bgray-dropdown">
                            <Link className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-100 hover:bg-bgray-forward focus:outline-none focus:bg-bgray-forward transition duration-150 ease-in-out" href="/">Back to Website</Link>
                            <button onClick={() => { alert("Action Failed") }} className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-100 hover:bg-bgray-forward focus:outline-none focus:bg-bgray-forward transition duration-150 ease-in-out">Logout</button>
                        </div>
                    </div>
                </div>
            </div>

            <ClusterSelector/>

            <div className={`hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-5 text-left ${pathname === "/hub" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                <Link href="/hub">
                    <i className={`fa-solid fa-home mr-2.5`}></i> Home
                </Link>
            </div>
            <div className={`hidden hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-5 text-left ${pathname === "/test" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                <Link href="https://hub.bloody.gg/api/auth/login">
                    <i className={`fa-solid fa-cube mr-2.5`}></i> Bloody Hub ASE
                </Link>
            </div>
            <div className={`hidden hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-5 text-left ${pathname === "/hub/link-discord" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                <Link href="/hub">
                    <i className={`fa-brands fa-discord mr-2.5`}></i> Link Discord Account
                </Link>
            </div>
            {user?.role == 'SYSTEM' && <>
                <hr className="border-gray-600 my-3" />
                <div className={`hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-5 text-left ${pathname === "/hub/users" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                    <Link href="/hub/users">
                        <i className={`fa-solid fa-users mr-2.5`}></i> Users
                    </Link>
                </div>
                <div className={`hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-5 text-left ${pathname === "/hub/users" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                    <Link href="/hub/logs">
                        <i className={`fa-solid fa-exclamation-triangle mr-2.5`}></i> Logs
                    </Link>
                </div>
                <div className={`hidden hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-5 text-left ${pathname === "/hub/users" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                    <Link href="/hub/finder">
                        <i className={`fa-solid fa-search mr-2.5`}></i> Player & Tribe Finder
                    </Link>
                </div>
                <div className={`hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-5 text-left ${pathname === "/hub/cluster_manager" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                    <Link href="/hub/cluster_manager">
                        <i className={`fa-solid fa-database mr-2.5`}></i> Cluster Manager
                    </Link>
                </div>
                <div className={`hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-5 text-left ${pathname === "/hub/server_manager" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
                    <Link href="/hub/server_manager">
                        <i className={`fa-solid fa-server mr-2.5`}></i> Server Manager
                    </Link>
                </div>
                <div className={`hidden hover:bg-bgray-secondary transition-colors text-white font-bold py-2 px-5 text-left ${pathname === "/hub/page_editor" ? 'text-white bg-red-600 hover:bg-red-600 w-full' : ''} w-full`}>
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