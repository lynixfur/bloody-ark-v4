"use client"

import PlayerRankings from "@/components/rankings/player-rankings";
import TribeRankings from "@/components/rankings/tribe-rankings";
import { useEffect, useState } from "react";

const Rankings = () => {

    /* Tabs */
    const [activeTab, setActiveTab] = useState("tribe_ranks");

    const changeTab = (tabId: string) => setActiveTab(tabId);

    /* Data Stuff */
    const [data, setData]: any = useState(null);
    const [isLoading, setLoading] = useState(true);

    const getRankings = () => {
        setLoading(true); // Set loading to true when fetching data

        fetch(`/api/ranks/${activeTab}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false); // Set loading to false when data is fetched
            });
    }

    useEffect(() => {
        // Trigger a data fetch whenever activeTab changes
        getRankings();
    }, [activeTab]);


    return (
        <div className="pt-[94px] w-full min-h-screen">
            <div className="h-full w-full" style={{ background: 'url(/bg.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="w-full h-full bg-bgray-bg bg-opacity-80">
                    <div className="flex h-full px-3 py-4 sm:p-10 md:p-0">
                        <div className="my-auto flex justify-center w-full">
                            <div>
                                <div className="container flex flex-col items-center py-12 sm:py-24">
                                    <div className="w-full mt-5 justify-center items-center flex-col mb-5 sm:mb-10">
                                        <h1 className="text-4xl lg:text-5xl xl:text-6xl text-center text-gray-50 font-black leading-7 md:leading-10">
                                            <span><i className="fa-solid fa-award" /><br />Rankings</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5">
                <div className="flex space-x-5">
                    <button
                        onClick={() => { changeTab("tribe_ranks") }}
                        className={`hover:bg-bgray-secondary transition-colors w-1/2 text-white font-bold py-2 px-5 ${activeTab === "tribe_ranks" ? 'text-white bg-red-600' : 'bg-bgray-overlay'}`}
                    >
                        <i className="fa-solid fa-users"></i> Tribe Rankings
                    </button>
                    <button
                        onClick={() => { changeTab("player_ranks") }}
                        className={`hover:bg-bgray-secondary  transition-colors w-1/2 text-white font-bold py-2 px-5 ${activeTab === "player_ranks" ? 'text-white bg-red-600' : 'bg-bgray-overlay'}`}
                    >
                        <i className="fa-solid fa-user"></i> Player Rankings
                    </button>
                </div>

                {/* Data */}
                <div className="mt-5 py-5">
                    {isLoading && <p className={'text-4xl text-zinc-400 text-center mt-10'}>
                        <span className={'text-red-600'}><i className="fa-solid fa-spinner fa-spin"></i></span>
                    </p>}

                    {isLoading === false && data.msg && <p className="text-zinc-300 text-center text-xl">
                        <i className="fa-solid fa-triangle-exclamation"></i> {data.msg}
                    </p>}

                    {data && data.success != true && <>
                        {activeTab === "tribe_ranks" && <TribeRankings/>}
                        {activeTab === "player_ranks" && <PlayerRankings/>}
                    </>}
                </div>
            </div>
        </div>
    )
}
export default Rankings;

