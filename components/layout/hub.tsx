import { getCurrentUser } from '@/libs/session'
import UnauthenticatedError from '../errors/unauthenticated';
import HubNavMenu from './hub-navmenu';

export default async function HubWrapper({ children }: { children: React.ReactNode }) {

    let user = await getCurrentUser();

    if (!user) return (
        <UnauthenticatedError/>
    )

    return (
        <section>
            <div className="flex mt-24">
                <HubNavMenu user={user}/>
                <div className="flex-1">
                    <div className="bg-bgray-bg min-h-screen">
                        <div className="">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 