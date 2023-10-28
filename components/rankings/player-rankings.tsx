interface PlayerRankingsProps {
    data: any // TODO: Use Rankings Interface!!!
}

export default function PlayerRankings({data}: PlayerRankingsProps) {
    return (
        <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
            <div>
                <div className="mb-10">
                    <div className="overflow-x-auto">
                        <table
                            className="w-full whitespace-nowrap"
                            v-if="$page.props.stats != null"
                        >
                            <tbody>
                                <tr className="focus:outline-none h-12 border-t border-b-[2px] border-bgray-bg bg-bgray-dropdown">
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                Rank
                                            </p>
                                        </div>
                                    </th>
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                Player Name
                                            </p>
                                        </div>
                                    </th>
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                Tribe Name
                                            </p>
                                        </div>
                                    </th>
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                Play Time
                                            </p>
                                        </div>
                                    </th>
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                Player Kills
                                            </p>
                                        </div>
                                    </th>
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                Player Deaths
                                            </p>
                                        </div>
                                    </th>
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                Tamed Dinos Kills
                                            </p>
                                        </div>
                                    </th>
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                KD
                                            </p>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
