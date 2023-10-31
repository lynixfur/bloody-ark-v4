import HubWrapper from '@/components/layout/hub';
import { getCurrentUser } from '@/libs/session';
import UnauthorizedError from '@/components/errors/unauthorized';
import { useState } from 'react';
import ServerEditor from '@/components/editors/server-editor';

const Hub = async () => {

    let user = await getCurrentUser();

    if (user?.role !== "SYSTEM") {
        return (<UnauthorizedError />)
    }

    return (
        <HubWrapper>
            <ServerEditor/>
        </HubWrapper>
    )
}
export default Hub;

