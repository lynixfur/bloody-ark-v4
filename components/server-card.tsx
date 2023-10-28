export default function ServerCard(props: any) {
    return (
        <>
        <div className="bg-gray-600 shadow-md rounded-3xl" style={{background: 'url(' + props?.server?.cardBackground + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="bg-bgray-bg  bg-opacity-80 shadow-md  rounded-3xl p-4 h-full">
                <div className="flex items-center space-x-4">
                    <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <img src={props?.server?.cardIcon} alt={props?.server?.name} className=" w-full  object-scale-down lg:object-fit  lg:h-48 rounded-2xl" />
                    </div>
                    <div className="flex flex-row items-center h-full w-full">
                        <div>
                        <h1 className="text-2xl font-bold">{props?.server?.name}</h1>
                        <p className="mt-1"><i className="fa-solid fa-earth-americas"></i> Map: {props?.server?.map}</p>
                        {props?.server?.ipAddress && <p className="mt-1"><i className="fa-solid fa-server"></i> IP: {props?.server?.ipAddress.replace("steam://connect/","")}</p>}
                        <div className="mt-3 flex space-x-4">
                            <span className={"text-white text-sm font-bold rounded-full px-2 py-1" + props?.server?.online ? 'bg-green-700 text-white text-sm font-bold rounded-full px-2 py-1' : 'bg-red-700 text-white text-sm font-bold rounded-full px-2 py-1'}>{props?.server?.online ? 'Server Online' : 'Server'}</span>
                            {props?.server?.ipAddress && <button onClick={() => {window.open('steam://connect/' + props?.server?.ipAddress.replace("steam://connect/",""))}} className="text-white text-sm font-bold bg-red-600 rounded-full px-2 py-1"><i className="fa-solid fa-arrow-right"></i> Join Server</button>}
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
  }