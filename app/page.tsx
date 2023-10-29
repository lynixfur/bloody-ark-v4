'use client'

import Footer from '@/components/layout/footer'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Bloody ARK - Evolve or Die',
  description: 'Welcome to BloodyARK, The perfect Ark: Survival Ascended experience. This server was established in 2017 and is still running strong as one of the biggest unofficial ark communities.',
}

export default function Home() {
  return (
    <>
      <div className="bg-bgray-bg min-h-screen">

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

        <section className="relative h-[500px] overflow-hidden bg-bgray-secondary mt-20">
          <div className="absolute z-20 flex items-center w-full h-full">
            <div className="relative z-20 w-5/6 px-14 py-8 text-white md:py-10 md:w-1/2">
              <h2 className="text-4xl font-bold ">Bloody Hub Ascended!</h2>
              <h1 className="my-5 font-bold text-green-500 hidden"><i className="fa fa-solid fa-star text-green-500"></i> 2023 UI Update Now Available!</h1>
              <p className="text-gray-400 mt-5 w-[500px]">
                Experienece a whole new web platform to monitor your
                survivors, tribe and stats! Find your tames, view base stats
                and keep track of their food status. Get notified of pending
                imprints, the amount of fertilizer and gasoline remaining in
                your crops and generators. This and much more is available in
                your profile.
              </p>
              <div className="justify-center"><br />
                <a href="https://hub.bloody-ark.com" className="inline-flex items-center  px-4 py-2 font-bold leading-6 text-md shadow rounded-full text-gray-100 bg-bred-2 transition ease-in-out duration-150">
                  <i className="fa-solid fa-arrow-right m-1 mr-2 my-auto text-xl text-gray-100"></i>
                  Access Hub
                </a>
              </div>

            </div>
            <div className="absolute top-0 right-0 flex w-full h-full">
              <div className="w-1/3 h-full bg-bgray-secondary"></div>
              <div className="relative w-1/3"><svg fill="currentColor" viewBox="0 0 100 100" className="absolute inset-y-0 z-20 h-full text-bgray-secondary">
                <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
              </svg>
                <svg fill="currentColor" viewBox="0 0 100 100" className="absolute inset-y-0 z-10 h-full ml-6 text-bgray-forward opacity-50">
                  <polygon points="0,0 100,0 50,100 0,100"></polygon>
                </svg></div>
            </div>
          </div>
          <div className="absolute top-0 right-0 block w-9/12 h-full">
            <img alt="Bloody Hub" className="object-cover object-top min-w-full h-full" src="https://cdn.discordapp.com/attachments/885607142051184700/1070148603470938213/image.png" />
          </div>

        </section>

        <section
          className="w-full bg-cover bg-left-top my-20"
          style={{
            height: "35rem",
            backgroundImage: "url(" + "https://cdn.discordapp.com/attachments/793171913559506965/1153720192619266068/SLY22_Trio_pose-min.png" + ")",
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-black bg-opacity-50">
            <div className="w-full">
              <h2
                className="text-5xl font-semibold leading-tight text-gray-100 text-center"
                data-aos="zoom-in"
              >
                Join our Community
              </h2>
              <div className="flex justify-center w-full mt-5">
                <Link
                  href="https://discord.gg/bloody"
                  className="h-[70px] w-72 relative"
                >
                  <img
                    className="object-cover shadow-xl rounded-full"
                    src="https://discordapp.com/api/guilds/356693332623228928/widget.png?style=banner2&w=1080&q=75" />
                </Link>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  )
}
