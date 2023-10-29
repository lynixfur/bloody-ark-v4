"use client"

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Bloody Hub Ascended',
  description: 'Welcome to BloodyARK, The perfect Ark: Survival Ascended experience. This server was established in 2017 and is still running strong as one of the biggest unofficial ark communities.',
}

const Hub = () => {
    return (
        <div className="mt-20 bg-bgray-bg h-screen flex justify-center items-center">
                <div className="">
                    <div className="flex justify-center"><img src="/gigantoraptor.webp" alt="gigantoraptor"/></div>
                    <h1 className="text-red-600 text-4xl font-bold text-center mt-5">[503] Access Denied</h1>
                    <p className="mt-3 text-xl text-center">The Bloody Hub is undergoing a rework in ARK: Survival Ascended, and unfortunately, you do not currently have access to it.
                    <br/>For further information, please get in touch with Lynix.</p>
                </div>
        </div>
    )
}
export default Hub;

