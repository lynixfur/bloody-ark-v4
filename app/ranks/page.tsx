"use client"

import PlayerRankings from "@/components/rankings/player-rankings";
import TribeRankings from "@/components/rankings/tribe-rankings";
import { useCallback, useEffect, useState } from "react";

const Rankings = () => {

    /* Tabs */
    const [activeTab, setActiveTab] = useState("tribe_ranks");

    const changeTab = (tabId: string) => setActiveTab(tabId);

    /* Data Stuff */
    const [data, setData]: any = useState(null);
    const [isLoading, setLoading] = useState(true);

    /* Search */
    const [search, setSearch] = useState('');
    const handleOnChange = useCallback(({ target: { value } }: any) => {
        setSearch(value);
    }, []);

    /* Pagination */
    const [filterPage, setFilterPage] = useState(0);
    const prevPage = () => { setFilterPage(filterPage - 1) };
    const nextPage = () => { setFilterPage(filterPage + 1) };


    const getRankings = () => {
        setLoading(true); // Set loading to true when fetching data

        fetch(`/api/ranks/${activeTab}?page=${filterPage}&search=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false); // Set loading to false when data is fetched
            });
    }

    useEffect(() => {
        // Trigger a data fetch whenever activeTab changes
        getRankings();
    }, [activeTab, filterPage, search]);


    return (
        <>
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
                <div className="flex justify-center items-center space-x-4 py-10">
                    <img src="/ark.webp" className="h-14 w-14" alt="ASA" />
                    <h1 className="font-semibold text-xl">ARK: Survival Evolved (ASE)</h1>
                </div>

                <div className="px-5 pb-5">
                    <div className="flex space-x-5">
                        <button
                            onClick={() => { changeTab("tribe_ranks") }}
                            className={`hover:bg-bgray-secondary transition-colors w-1/2 text-white font-bold py-2 px-5 ${activeTab === "tribe_ranks" ? 'text-white bg-red-600' : 'bg-bgray-dropdown'}`}
                        >
                            <i className="fa-solid fa-users"></i> Tribe Rankings
                        </button>
                        <button
                            onClick={() => { changeTab("player_ranks") }}
                            className={`hover:bg-bgray-secondary  transition-colors w-1/2 text-white font-bold py-2 px-5 ${activeTab === "player_ranks" ? 'text-white bg-red-600' : 'bg-bgray-dropdown'}`}
                        >
                            <i className="fa-solid fa-user"></i> Player Rankings
                        </button>
                    </div>

                    <div className="flex space-x-5 hidden">
                        {/* Filters */}
                        {data && data.success != false && <div className="mt-10 flex space-x-4 w-1/2 pr-3 items-center">
                            <input
                                value={search}
                                onChange={handleOnChange}
                                placeholder={`Search for ${activeTab === "tribe_ranks" ? 'Tribes' : 'Players'}`} name="tribe_search" id="tribe_search" className="px-3 py-2 text-gray-300 bg-bgray-dropdown flex-1 border-gray-700 border" />

                            <div className="px-3 py-2 text-gray-300 bg-bgray-dropdown border-gray-700 border">
                                <strong>Cluster:</strong> (ASE) 3 Man
                            </div>
                        </div>}
                    </div>



                    {/* Data */}
                    <div className="mt-2 py-5">
                        {isLoading && <p className={'text-4xl text-zinc-400 text-center mt-10'}>
                            <span className={'text-red-600'}><i className="fa-solid fa-spinner fa-spin"></i></span>
                        </p>}

                        {isLoading === false && data.success != true && <p className="text-2xl text-red-600 text-center mt-10 font-semibold">
                            <i className="fa-solid fa-triangle-exclamation"></i> <span className="text-zinc-300">{data.msg}</span>
                        </p>}

                        {data && data.success != false && isLoading === false && <>
                            {activeTab === "tribe_ranks" && <TribeRankings data={data?.ranks} search={search} pagination={data?.pagination} />}
                            {activeTab === "player_ranks" && <PlayerRankings data={data?.ranks} search={search} pagination={data?.pagination} />}
                        </>}
                    </div>

                    {/* Pagination */}

                    {isLoading === false && data.success != false &&
                        <>
                            <p className="text-gray-300">Page <strong>{data?.pagination?.current_page + 1}</strong> of <strong>{data?.pagination?.total_pages}</strong></p>
                            <div className="flex space-x-2 mt-3">
                                {data?.pagination?.current_page > 0 ?
                                    <button onClick={prevPage} className="inline-flex items-center px-3 py-1 font-bold leading-6 text-md shadow rounded-full text-gray-100  bg-bgray-overlay transition ease-in-out duration-150">  <i className="fa-solid fa-arrow-left m-1 mr-2 my-auto"></i> Previous</button>
                                    : <></>
                                }
                                {data?.pagination?.current_page < data?.pagination?.total_pages && data?.pagination?.current_page != data?.pagination?.total_pages ?
                                    <button onClick={nextPage} className="inline-flex items-center px-3 py-1 font-bold leading-6 text-md shadow rounded-full text-gray-100 bg-bgray-overlay transition ease-in-out duration-150">  Next <i className="fa-solid fa-arrow-right m-1 ml-1 my-auto"></i></button>
                                    : <></>
                                }
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
export default Rankings;

