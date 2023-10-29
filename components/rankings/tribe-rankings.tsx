interface TribeRankingsProps {
    data: any // TODO: Use Rankings Interface!!!
}

export default function TribeRankings({ data }: TribeRankingsProps) {
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
                                                Tribe Name
                                            </p>
                                        </div>
                                    </th>
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                Tribe Damage
                                            </p>
                                        </div>
                                    </th>
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                Kills
                                            </p>
                                        </div>
                                    </th>
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                Deaths
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
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                Tame Kills
                                            </p>
                                        </div>
                                    </th>
                                    <th className="pl-5">
                                        <div className="flex items-center">
                                            <p className="text-base leading-none text-white font-bold uppercase">
                                                Time Played
                                            </p>
                                        </div>
                                    </th>
                                </tr>
                                {/* Map Information */}
                                {data?.map((tribe: any, rank: any) => {
                                    return (
                                        <tr key={tribe?.TribeName} className="focus:outline-none h-12 border-t border-b-[2px] border-bgray-bg bg-bgray-secondary">
                                            <td className={"pl-5"}>
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {0 + rank + 1}
                                                    </p>

                                                    {/* Tribe Ranking Trophy */}
                                                    {true === true &&
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
                                                        {tribe?.TribeName.replace(/\b\w+(\.\w+)+/gi, '[HIDDEN]')}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {tribe?.DamageScore}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {tribe?.Kills}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {tribe?.Deaths}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {(tribe?.Kills / tribe?.Deaths).toFixed(1)}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {tribe?.DinoKills}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <p className="text-base leading-none text-white font-bold">
                                                        {tribe?.PlayTime
                                                            ? (
                                                                parseInt(tribe?.PlayTime) / 60
                                                            ).toFixed(2)
                                                            : 0}{" "}
                                                        hrs
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