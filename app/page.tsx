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
                <a href="/hub" className="inline-flex items-center  px-4 py-2 font-bold leading-6 text-md shadow rounded-full text-gray-100 bg-bred-2 transition ease-in-out duration-150">
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
            backgroundImage: "url(" + "/sly1.png" + ")",
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
