'use client '
import { useCallback, useState } from "react";
import ReactMarkdown from "react-markdown";

enum GameEnum {
    "ArkASA",
    "ArkASE",
    "Ark2",
}

interface EditorProps {
    page: any;
    clusters: any;
    handleBack: any;
}

const Editor = ({ page, clusters, handleBack }: EditorProps) => {

    /* Content */
    const [content, setContent] = useState('');

    const handleContentChange = useCallback(({ target: { value } }: any) => {
        setContent(value);
    }, []);

    /* Metadata */
    const [metadata, setMetadata] = useState({
        title: '',
        icon: '',
        strId: '',
        backgroundUri: '',
        cluster: clusters?.[0]?.id,
        game: 'ArkASA',
    });

    return (
        <>
            <div className="p-5">
                <div className="flex items-center mb-5">
                    <h1 className="text-white text-4xl font-bold">
                        <button onClick={handleBack}><i className="fa-solid fa-circle-arrow-left text-red-600 hover:text-red-800 transition-colors"></i></button> Title Here</h1>
                </div>

                {/* Metadata */}
                <p className="text-gray-400 text-2xl font-semibold mb-5">
                    <i className="fa-solid fa-microchip mr-2"></i> Metadata
                </p>

                <div className="flex flex-col space-y-5">
                    <div className="flex items-center">
                        <p className="text-gray-400 font-semibold my-auto w-1/2">
                            Page Title
                        </p>
                        <input
                            value={metadata.title}
                            name="id"
                            placeholder="Shadowmanes are Evil!"
                            className="w-full bg-bgray-secondary text-gray-400 border border-bgray-border ml-3 my-auto focus:outline-none"
                            onChange={(e) =>
                                setMetadata({ ...metadata, title: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <p className="text-gray-400 font-semibold my-auto w-1/2">
                            Page Icon
                        </p>
                        <input
                            value={metadata.icon}
                            placeholder="fa-solid fa-server"
                            name="id"
                            className="w-full bg-bgray-secondary text-gray-400 border border-bgray-border ml-3 my-auto focus:outline-none"
                            onChange={(e) =>
                                setMetadata({ ...metadata, icon: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <p className="text-gray-400 font-semibold my-auto w-1/2">Page ID</p>
                        <input
                            value={metadata.strId}
                            name="id"
                            placeholder="shadowmanes-are-evil"
                            className="w-full bg-bgray-secondary text-gray-400 border border-bgray-border ml-3 my-auto focus:outline-none"
                            onChange={(e) =>
                                setMetadata({ ...metadata, strId: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <p className="text-gray-400 font-semibold my-auto w-1/2">
                            Background Image (URL)
                        </p>
                        <input
                            placeholder="https://example.com/lynix.png"
                            value={metadata.backgroundUri}
                            name="id"
                            className="w-full bg-bgray-secondary text-gray-400 border border-bgray-border ml-3 my-auto focus:outline-none"
                            onChange={(e) =>
                                setMetadata({ ...metadata, backgroundUri: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <p className="text-gray-400 font-semibold my-auto w-1/2">Cluster</p>
                        <select
                            name="id"
                            value={metadata.cluster}
                            className="w-full bg-bgray-secondary text-gray-400 border border-bgray-border ml-3 my-auto focus:outline-none"
                            onChange={(e) =>
                                setMetadata({ ...metadata, cluster: e.target.value })
                            }
                            required
                        >
                            {clusters?.map((cluster: any) => (
                                <option key={cluster?.id} value={cluster?.id}>
                                    {cluster?.strId} ({cluster?.game}) {'->'} {cluster?.id}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center">
                        <p className="text-gray-400 font-semibold my-auto w-1/2">Game</p>
                        <select
                            name="id"
                            value={metadata.game}
                            className="w-full bg-bgray-secondary text-gray-400 border border-bgray-border ml-3 my-auto focus:outline-none"
                            onChange={(e) =>
                                setMetadata({ ...metadata, game: e.target.value })
                            }
                            required
                        >
                            <option value="ArkASA">ARK: Survival Ascended</option>
                            <option value="ArkASE">ARK: Survival Evolved</option>
                            <option value="Ark2">ARK II</option>
                        </select>
                    </div>
                </div>

                {/*<div className="flex items-center mb-5"><button className="block py-2 pr-4 pl-3 text-black bg-white rounded-full p-4 font-bold transition-colors my-auto mr-2"><i className="fas fa-arrow-left mr-1"></i> Back</button> <h1 className="text-white text-2xl font-bold my-auto">{isCreating == false ? 'Currently Editing' : 'Creating Page'} - {isCreating == false ? page?.title : pageMetadata.title}</h1></div>
                */}<div className="flex space-x-5 mt-5">
                    <div className="w-1/2">
                        <p className="text-gray-400  font-semibold  text-2xl"><i className="fa-solid fa-pen-to-square mr-2"></i> Editor</p>
                        <textarea className="w-full bg-bgray-secondary text-gray-400 border border-bgray-border mt-5" rows={50} cols={50} value={content} onChange={handleContentChange} />
                    </div>
                    <div className="w-1/2">
                        <p className="text-gray-400 font-semibold  text-2xl"><i className="fa-solid fa-image mr-2"></i> Preview</p>
                        <div className="h-[1218px] overflow-auto px-5 bg-bgray-secondary border border-bgray-border mt-5">
                            <ReactMarkdown className="mt-5 w-full prose prose-invert max-w-none break-words">{content}</ReactMarkdown>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center mb-3 mt-5">
                    <button
                        className="block py-2 pr-4 pl-3 text-white bg-red-600 rounded-full p-4 font-bold transition-colors"><i className="fas fa-plus mr-2"></i>Create Page

                    </button>
                </div>
            </div>
        </>
    )
}

export default Editor