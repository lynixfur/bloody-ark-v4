import { getCurrentUser } from '@/libs/session'
import UnauthenticatedError from '../errors/unauthenticated';

export default async function HubWrapper({ children }: { children: React.ReactNode }) {

    let user = await getCurrentUser();

    if (!user) return (
        <UnauthenticatedError/>
    )

    return (
        <section>
            <div className="flex mt-24">
                <div className="w-[300px] py-5 border-r border-gray-700">
                    <div className="flex justify-center">
                        <img src="/logo.png" alt="Bloody ARK Logo" className="w-24 h-24 my-3 mx-3"/>
                    </div>
                    <p className={`px-3 my-3 font-semibold`}><i className={`fa-solid fa-user mr-1`}></i> General</p>
                    <button className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${true ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                        <i className={`fa-solid fa-home mr-2.5`}></i> Home
                    </button>
                    <button className={`hidden hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${false ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                        <i className={`fa-brands fa-discord mr-2.5`}></i> Link Discord Account
                    </button>
                    {user?.role === 'admin' && <>
                    <p className={`px-3 my-3 font-semibold`}><i className={`fa-solid fa-wrench mr-1`}></i> Admin Tools</p>
                    <button className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${false ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                        <i className={`fa-solid fa-users mr-2.5`}></i> Users
                    </button>
                    <button className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${false ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                        <i className={`fa-solid fa-exclamation-triangle mr-2.5`}></i> Logs
                    </button>
                    <button className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${false ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                        <i className={`fa-solid fa-users mr-2.5`}></i> Tribe Logs
                    </button>
                    <button className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${false ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                        <i className={`fa-solid fa-search mr-2.5`}></i> Player & Tribe Finder
                    </button>
                    <button className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${false ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                        <i className={`fa-solid fa-database mr-2.5`}></i> Cluster Manager
                    </button>
                    <button className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${false ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                        <i className={`fa-solid fa-server mr-2.5`}></i> Server Manager
                    </button>
                    <button className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${false ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                        <i className={`fa-solid fa-file mr-2.5`}></i> Page Editor
                    </button>
                    <button className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${false ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                        <i className={`fa-solid fa-cogs mr-2.5`}></i> Site Settings
                    </button>
                    <p className={`px-3 my-3 font-semibold`}><i className={`fa-solid fa-box mr-1`}></i> Other</p>
                    <button className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${false ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                        <i className={`fa-solid fa-info-circle mr-2.5`}></i> About
                    </button>
                    </>}
                </div>
                <div className="flex-1">
                    <div className="bg-bgray-bg min-h-screen">
                        <div className="">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 