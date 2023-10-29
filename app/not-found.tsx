import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Bloody ARK - Not Found',
  description: 'Welcome to BloodyARK, The perfect Ark: Survival Ascended experience. This server was established in 2017 and is still running strong as one of the biggest unofficial ark communities.',
}
const Hub = () => {
    return (
        <div className="mt-20 bg-bgray-bg h-screen flex justify-center items-center">
                <div className="">
                    <div className="flex justify-center"><img src="/gigantoraptor.webp" alt="gigantoraptor"/></div>
                    <h1 className="text-red-600 text-4xl font-bold text-center mt-5">[404] Not Found</h1>
                    <p className="mt-3 text-xl text-center">We can&apos;t find the page you were looking for maybe it was lost on another ARK?</p>
                </div>
        </div>
    )
}
export default Hub;