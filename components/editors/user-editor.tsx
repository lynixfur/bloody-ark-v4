
'use client'

import { useCallback, useEffect, useState } from "react";
import Editor from "./forms/editor";

export default function UserEditor() {
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [data, setData]: any = useState(null);

    useEffect(() => {
        // Trigger a data fetch whenever activeTab changes
        getPages();
    }, []);

    const getPages = () => {
        setLoading(true); // Set loading to true when fetching data

        fetch('/api/hub/users')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false); // Set loading to false when data is fetched
            });
    }

    const handleBack = useCallback(async () => {
        setIsEditing(false);
    }, []);


    return (
        <>
            {
                isLoading && <p className={'text-2xl py-5 text-zinc-400 text-center'}>
                    <span className={'text-red-600'}><i className="fa-solid fa-spinner fa-spin"></i></span>
                </p>
            }

            {!isLoading && <>

                {/* Header */}
                {!isEditing && <div className="w-full">
                    <div className="h-full w-full" style={{ background: 'url(https://preview.redd.it/q82kow7rz7m91.jpg?auto=webp&s=552cb5a950dea21c862928a193765862fe32ae84)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div className="w-full h-full bg-bgray-bg bg-opacity-70">
                            <div className="flex h-full px-3 py-4 sm:p-10 md:p-0">
                                <div className="my-auto flex justify-center w-full">
                                    <div>
                                        <div className="container flex flex-col items-center py-12 sm:py-24">
                                            <div className="w-full mt-5 justify-center items-center flex-col mb-5 sm:mb-10">
                                                <h1 className="text-4xl lg:text-5xl xl:text-6xl text-center text-gray-50 font-black leading-7 md:leading-10">
                                                    <span><i className="fa-solid fa-user mr-4 mb-3" /><br />User Manager</span>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

                {!isEditing && <div className="p-5">
                    <div className="flex">
                        <h1 className="text-white text-2xl font-bold mb-4 flex-1">Users</h1>
                    </div>
                    {/*sendingData && <p className="flex items-center my-5 text-gray-400 font-semibold ml-1"><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg> Saving Changes...</p>*/}
                    {/*successStatus == false &&
                        <p className="my-5 text-red-600 font-semibold"><i className="fa-solid fa-triangle-exclamation mr-1"></i> {statusMsg ? statusMsg : 'Something went wrong, try again later!'}</p>
                */}
                    {/*successStatus == true &&
                        <p className="my-5 text-green-600 font-semibold"><i className="fa-solid fa-check mr-1"></i> Changes saved succesfully!</p>
                */}
                    <table
                        className="w-full whitespace-nowrap"
                        v-if="$page.props.stats != null"
                    >
                        <tbody>
                            <tr className="focus:outline-none h-12 border-t border-b-[2px] border-bgray-bg bg-bgray-dropdown">
                                <th className="p-5">
                                    <div className="flex items-center">
                                        <p className={`text-base leading-none font-bold hover:text-red-600 transition-colors text-white`}>
                                            ID
                                        </p>
                                    </div>
                                </th>
                                <th className="p-5">
                                    <div className="flex items-center">
                                        <p className={`text-base leading-none font-bold hover:text-red-600 transition-colors text-white`}>
                                            Username
                                        </p>
                                    </div>
                                </th>
                                <th className="p-5">
                                    <div className="flex items-center">
                                        <p className={`text-base leading-none font-bold hover:text-red-600 transition-colors text-white`}>
                                            Role
                                        </p>
                                    </div>
                                </th>
                                <th className="p-5">
                                    <div className="flex items-center">
                                        <p className={`text-base leading-none font-bold hover:text-red-600 transition-colors text-white`}>
                                            Active
                                        </p>
                                    </div>
                                </th>
                            </tr>
                            {data?.users?.map((user: any) => (
                                <tr key={user?.id} className="focus:outline-none h-12 border-t border-b-[2px] border-bgray-bg bg-bgray-secondary hover:bg-bgray-overlay transition-colors">
                                    {/*<div className="grid grid-cols-5 items-center">
                                    <span className="ml-2 text-md font-bold col-span-3"><i className={page?.icon + " m-1 my-auto text-xl text-gray-500"} /> {page?.name}</span>
                                    <span className="ml-5 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full text-gray-500">Cluster ID : {page?.cluster.id} ({page?.cluster.strId})</span>
                                    <span className="ml-5 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full text-gray-500">Game : {page?.game}</span>
                                    <button className=""><span className="text-red-500 ml-5"><i className="fa-regular fa-trash-can"></i></span></button>
                                </div>*/}
                                    <td className="pl-5">
                                        {user?.id}
                                    </td>
                                    <td className="pl-5">
                                        <div className="flex items-center space-x-4 my-2">
                                            <img src={user?.image} className="rounded-full w-8 h-8"></img>
                                            <p className="font-bold">{user?.name}</p>
                                        </div>
                                    </td>
                                    <td className="pl-5">
                                        {user?.role === "SYSTEM" ?
                                            <select
                                                value={user?.role}
                                                className="w-full bg-bgray-secondary text-gray-400 border border-bgray-border focus:outline-none opacity-50"
                                                disabled
                                            >
                                                <option>SYSTEM</option>
                                                <option>ADMIN</option>
                                                <option>USER</option>
                                            </select> :
                                            <select
                                                value={user?.role}
                                                className="w-full bg-bgray-secondary text-gray-400 border border-bgray-border focus:outline-none"
                                            >
                                                <option>SYSTEM</option>
                                                <option>ADMIN</option>
                                                <option>USER</option>
                                            </select>
                                        }
                                    </td>
                                    <td className="pl-5">
                                        <i className="fa-solid fa-circle text-green-600"></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}

                {isEditing && <Editor page={null} clusters={data?.clusters} handleBack={handleBack} />}
            </>}
        </>
    )
}