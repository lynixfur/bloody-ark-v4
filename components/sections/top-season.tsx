'use client'

export default function TopSeasonSection() {
    return (
        <section className='px-20 py-10 flex justify-center'>
        <div className="bg-bgray-secondary p-4 min-w-[1000px]">
            <h1 className="text-3xl font-bold text-white my-5 text-center">Season Top Tribes</h1>
            <div className="flex border border-zinc-700">
                <div className="py-5 border-r border-zinc-700">
                    <div className="flex items-center space-x-3 px-5 mb-5 text-xl text-zinc-400 font-bold text-center">
                      <img src="/asa.webp" className="w-10 h-10"/>
                      <p>ARK: Survival Ascended</p>
                    </div>
                    <button onClick={() => {}} className={`hover:bg-bgray-secondary transition-colors w-full font-bold py-2 px-10 text-left bg-red-600 text-white`}>
                      <i className="fa-solid fa-server"></i> Cluster 1
                    </button>
                    <button onClick={() => {}} className={`hover:bg-bgray-secondary transition-colors w-full font-bold py-2 px-10 text-left text-white `}>
                      <i className="fa-solid fa-server"></i> Cluster 2
                    </button>
                    <div className="mt-5 flex items-center space-x-3 px-5 mb-5  text-zinc-400  text-xl font-bold text-center">
                      <img src="/ark.webp" className="w-10 h-10"/>
                      <p>ARK: Survival Evolved</p>
                    </div>
                    <button onClick={() => {}} className={`hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-10 text-left`}>
                      <i className="fa-solid fa-server"></i> 3 Man
                    </button>
                </div>
                <div className="flex-1 p-5 space-y-4 flex flex-col items-center justify-center text-left">
                  <p className="text-white font-bold text-xl">Cluster 1 Top Tribes</p>
                  <div className='space-y-4 font-semibold text-zinc-400'>
                    <p className="text-4xl"><i className="fa-solid fa-trophy" style={{ color: '#ffd700' }}></i> Tribe 1</p>
                    <p className="text-4xl"><i className="fa-solid fa-trophy" style={{ color: '#C0C0C0' }}></i> Tribe 1</p>
                    <p className="text-4xl"><i className="fa-solid fa-trophy" style={{ color: '#977b29' }}></i> Tribe 1</p>
                  </div>
                </div>
            </div>
        </div>
      </section>
    )
}