import HubWrapper from '@/components/layout/hub';
import { Metadata } from 'next'
import { getCurrentUser } from '@/libs/session';

export const metadata: Metadata = {
    title: 'Bloody Hub Ascended',
    description: 'Welcome to BloodyARK, The perfect Ark: Survival Ascended experience. This server was established in 2017 and is still running strong as one of the biggest unofficial ark communities.',
}

const Hub = async () => {

    let user = await getCurrentUser();

    return (
        <HubWrapper>
            {/* Header */}
            <div className=" w-full" style={{ background: 'url(/bg.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                <div className="w-full h-full bg-bgray-bg bg-opacity-80">
                    <div className="flex h-full px-3 py-4 sm:p-10 md:p-0">
                        <div className="my-auto flex justify-center w-full">
                            <div>
                                <div className="container flex flex-col items-center py-12 sm:py-24">
                                    <div className="w-full mt-5 justify-center items-center flex-col mb-5 sm:mb-10">
                                        <div className="flex justify-center">
                                            <img className="h-24 w-24 rounded-full mr-3 shadow-lg" src={user?.image ?? ''} alt={user?.name!} />
                                        </div>
                                        <h1 className="text-4xl lg:text-5xl xl:text-6xl text-center text-gray-50 font-black leading-7 md:leading-10">
                                            <span>Welcome, {user?.name}!</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-zinc-300 text-center py-10">There&apos;s nothing here yet, we&apos;re still working on the Bloody Hub Ascended!</p>
        </HubWrapper>
    )
}
export default Hub;

