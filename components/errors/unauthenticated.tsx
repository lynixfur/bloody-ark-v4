'use client'
import { signIn } from "next-auth/react";

export default function UnauthenticatedError() {
    return (
        <div className="mt-20 bg-bgray-bg h-screen flex justify-center items-center">
            <div className="">
                <div className="flex justify-center"><img src="/gigantoraptor.webp" alt="gigantoraptor" /></div>
                <h1 className="text-red-600 text-4xl font-bold text-center mt-5">Unauthenticated</h1>
                <p className="mt-3 text-xl text-center">To access the Bloody Hub Ascended you must be logged in.</p>
                <div className="flex justify-center mt-3">
                    <button onClick={() => signIn("steam")} className="block py-2 px-5 text-white bg-bred-2 rounded-full p-4 font-bold transition-colors"><i className="fas fa-user mr-2"></i> Login</button>
                </div>
            </div>
        </div>
    )
}