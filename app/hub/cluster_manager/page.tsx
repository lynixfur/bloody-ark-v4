import HubWrapper from '@/components/layout/hub';
import { getCurrentUser } from '@/libs/session';
import UnauthorizedError from '@/components/errors/unauthorized';
import { useState } from 'react';
import ClusterEditor from '@/components/editors/cluster-editor';

const Hub = async () => {

    let user = await getCurrentUser();

    if (user?.role !== "SYSTEM") {
        return (<UnauthorizedError />)
    }

    return (
        <HubWrapper>
            <ClusterEditor/>
        </HubWrapper>
    )
}
export default Hub;

