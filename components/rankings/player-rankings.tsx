import TableHeader from "../table-header"

interface PlayerRankingsProps {
    data: any // TODO: Use Rankings Interface!!!
    search: any,
    pagination: any
}

export default function PlayerRankings({ data, search, pagination }: PlayerRankingsProps) {
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
                                    <TableHeader name="Rank" className={search ? "hidden pl-5" : "pl-5"} />
                                    <TableHeader name="Player Name" className="pl-5" />
                                    <TableHeader name="Tribe Name" className="pl-5" />
                                    <TableHeader name="Play Time" className="pl-5" />
                                    <TableHeader name="Player Kills" className="pl-5" active={true} />
                                    <TableHeader name="Player Deaths" className="pl-5" />
                                    <TableHeader name="Tamed Dinos Kills" className="pl-5" />
                                    <TableHeader name="KD" className="pl-5" />
                                </tr>
                                {/* Map Information */}
                                {data?.map((player: any, rank: any) => {
                                    return (
                                        <tr key={player?.PlayerName} className="focus:outline-none h-12 border-t border-b-[2px] border-bgray-bg bg-bgray-secondary">
                                            <td className={search ? "hidden pl-5" : "pl-5"}>
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {((pagination?.current_page) * 20) + rank + 1}
                                                    </p>

                                                    {/* Tribe Ranking Trophy */}
                                                    {pagination?.current_page == 0 &&
                                                        <>
                                                            {(() => {
                                                                switch (rank) {
                                                                    case 0:
                                                                        return <p className="ml-1" style={{ color: '#ffd700' }}><i className="fa-solid fa-trophy"></i></p>;
                                                                    case 1:
                                                                        return <p className="ml-1" style={{ color: '#C0C0C0' }}><i className="fa-solid fa-trophy"></i></p>;
                                                                    case 2:
                                                                        return <p className="ml-1" style={{ color: '#977b29' }}><i className="fa-solid fa-trophy"></i></p>;
                                                                    default:
                                                                        return null;
                                                                }
                                                            })()}
                                                        </>}
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {player.PlayerName}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {player.TribeName}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {player.PlayTime}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {player.PlayerKills}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {player.DeathByPlayer}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {player.DinoKills}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {player?.KD}
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
