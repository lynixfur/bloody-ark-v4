"use client"

import PageRender from "@/components/page-render";
import { useEffect, useState } from "react";

const Info = () => {
    const [data, setData]: any = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState({
        tabId: "welcome",
        tabName: "Welcome",
        tabIcon: "fa-solid fa-door-open",
        tabBackground: "/bg.png",
        content: "# Welcome to the Information Hub!\n\nYou can find useful information about Bloody ARK here!\n\n\nFor any support or concern you may have you may reach us on Discord!"
    });

    const getPages = () => {
        setLoading(true); // Set loading to true when fetching data

        fetch('/api/info?game=' + "ArkASA")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false); // Set loading to false when data is fetched
        });
    }

    useEffect(() => {
        // Trigger a data fetch whenever activeTab changes
        getPages();
    }, []);

    return (
        <div className="mt-24 bg-bgray-bg h-screen flex">
         {/* Side Navigation */}
         <div className="w-[300px] py-5 border-r border-gray-700">
            <h1 className="font-bold text-2xl text-center mb-2 text-red-600">Information</h1>
            <div className="flex flex-col items-center space-x-3 px-10 mb-5 font-bold text-center">
                <img src="/asa.webp" className="w-20 h-20 mb-2"/>
                <p>Ark: Survival Ascended</p>
            </div>
            {isLoading && <p className={'text-2xl py-5 text-zinc-400 text-center'}>
                    <span className={'text-red-600'}><i className="fa-solid fa-spinner fa-spin"></i></span>
            </p>}
            {data?.msg && <p className="text-center text-zinc-400">No Pages Available</p>}
            {!data?.msg && 
                <>{data?.map((link: any) => (
                    <button key={link.id} onClick={() => {
                        setActiveTab({
                            tabId: link.id,
                            tabName: link.name,
                            tabBackground: "/bg.png",
                            tabIcon: link.icon,
                            content: link.content
                        })
                    }} className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left ${activeTab.tabId == link.id ? 'text-white bg-red-600 hover:bg-red-600' : ''}`}>
                        <i className={link?.icon}></i> {link?.name}
                    </button>
                ))}</>}
         </div>
         <div className="bg-bgray-bg flex-1">
            {/* Header */}
            <div className=" w-full" style={{ background: 'url(/bg.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                <div className="w-full h-full bg-bgray-bg bg-opacity-80">
                    <div className="flex h-full px-3 py-4 sm:p-10 md:p-0">
                        <div className="my-auto flex justify-center w-full">
                            <div>
                                <div className="container flex flex-col items-center py-12 sm:py-24">
                                    <div className="w-full mt-5 justify-center items-center flex-col mb-5 sm:mb-10">
                                        <h1 className="text-4xl lg:text-5xl xl:text-6xl text-center text-gray-50 font-black leading-7 md:leading-10">
                                            <span><i className={activeTab.tabIcon} /> <br />{activeTab.tabName}</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PageRender content={activeTab.content}/> 

         </div>


        </div>
    )
}
export default Info;