"use client"

import ServerCard from "@/components/server-card";
import { useEffect, useState } from "react";

const ServerList = () => {
    const [activeTab, setActiveTab] = useState("ASA_PVP");
    const [data, setData]: any = useState(null);
    const [isLoading, setLoading] = useState(true);

    const changeCluster = (clusterId: string) => {
        setActiveTab(clusterId);
    }

    useEffect(() => {
        // Trigger a data fetch whenever activeTab changes
        getServers();
    }, [activeTab]);

    const getServers = () => {
        setLoading(true); // Set loading to true when fetching data

        fetch('/api/servers?cluster=' + activeTab)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false); // Set loading to false when data is fetched
            });
    }

    return (
        <div className="mt-24 bg-bgray-bg">
            <div className="h-full w-full" style={{ background: 'url(/bg.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                <div className="w-full h-full bg-bgray-bg bg-opacity-80">
                    <div className="flex h-full px-3 py-4 sm:p-10 md:p-0">
                        <div className="my-auto flex justify-center w-full">
                            <div>
                                <div className="container flex flex-col items-center py-12 sm:py-24">
                                    <div className="w-full mt-5 justify-center items-center flex-col mb-5 sm:mb-10">
                                        <h1 className="text-4xl lg:text-5xl xl:text-6xl text-center text-gray-50 font-black leading-7 md:leading-10">
                                            <span><i className="fa-solid fa-hard-drive" /> <br />Server List</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-10">
                <div className="flex space-x-5">

                    <div id="asa" className="w-full flex flex-col justify-center text-center">
                        <div className="flex justify-center items-center space-x-4 mb-3">
                            <img src="/asa.webp" className="h-14 w-14" alt="ASA" />
                            <h1 className="font-semibold text-xl">ARK: Survival Ascended (ASA)</h1>
                        </div>
                        <div className="w-full flex space-x-1">
                            <button
                                onClick={() => { changeCluster("ASA_PVP") }}
                                className={`hover:bg-bgray-secondary transition-colors w-1/2 text-white font-bold py-2 px-5 ${activeTab === "ASA_PVP" ? 'text-white bg-red-600' : 'bg-bgray-overlay'}`}
                            >
                                <i className="fa-solid fa-shield"></i> PvP
                            </button>
                            <button
                                onClick={() => { changeCluster("ASA_PVPVE") }}
                                className={`hover:bg-bgray-secondary transition-colors w-1/2 text-white font-bold py-2 px-5 ${activeTab === "ASA_PVPVE" ? 'text-white bg-red-600' : 'bg-bgray-overlay'}`}
                            >
                                <i className="fa-solid fa-tree"></i> PvPvE
                            </button>
                        </div>
                    </div>

                    <div id="ase" className="w-full flex flex-col justify-center text-center">
                        <div className="flex justify-center items-center space-x-4 mb-3">
                            <img src="/ark.webp" className="h-14 w-14" alt="ASA" />
                            <h1 className="font-semibold text-xl">ARK: Survival Evolved (ASE)</h1>
                        </div>
                        <div className="w-full flex space-x-1">
                            <button
                                onClick={() => { changeCluster("ASE_3MAN") }}
                                className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-5 ${activeTab === "ASE_3MAN" ? 'text-white bg-red-600' : 'bg-bgray-overlay'}`}
                            >
                                <i className="fa-solid fa-users"></i> 3 Man
                            </button>
                        </div>
                    </div>
                </div>

                <h3 className="font-extrabold uppercase text-white text-4xl my-5"><i className="fa-solid fa-circle-question"></i> Having trouble joining?</h3>
                <p className="mb-5 text-base text-gray-100 sm:text-lg text-left">We can help you! Follow this simple step-by-step guide to get started.</p>
                <p className="mb-5 text-gray-300 sm:text-lg text-left">
                    Step 1: Open Steam and click on view and then servers<br />
                    Step 2: Click on favorites tab and then add a server<br />
                    Step 3: Enter the following Server IP below then click add this address to favorites<br />
                    Step 4: Start Ark Survival and click Join ARK<br />
                    Step 5: Filter for favorites and ensure all other filters are reset<br />
                    Step 6: The server should now visible for you!!<br />
                </p>

                {isLoading && <p className={'text-2xl py-5 text-zinc-400'}>
                    <span className={'text-red-600'}><i className="fa-solid fa-spinner fa-spin"></i></span>
                </p>}

                {isLoading === false && data?.msg === "No Servers Available" && <p className={'text-2xl py-5 text-zinc-400'}>
                    <span className={'text-red-600'}><i className="fa-solid fa-triangle-exclamation"></i></span> No Servers Available!
                </p>}

                <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {/*{servers.length == 0 && <h1 className="text-white">There&apos;s currently no servers online!</h1>}
                {servers.map((server: any) => (
                    <ServerCard key={server?.id} server={server}/>
                ))}*/}

                    {!data?.msg &&
                        <>{data?.map((server: any) => (
                            <ServerCard key={server?.id} server={server} />
                        ))}</>}
                </div>
            </div>

        </div>)
}
export default ServerList;

