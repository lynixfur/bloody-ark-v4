'use client'
import { signIn } from "next-auth/react";

export default function UnauthorizedError() {
    return (
        <div className="mt-20 bg-bgray-bg h-screen flex justify-center items-center">
            <div className="">
                <div className="flex justify-center"><img src="/gigantoraptor.webp" alt="gigantoraptor" /></div>
                <h1 className="text-red-600 text-4xl font-bold text-center mt-5">Unauthorized</h1>
                <p className="mt-3 text-xl text-center">You have unauthorized access to this resource.</p>
            </div>
        </div>
    )
}