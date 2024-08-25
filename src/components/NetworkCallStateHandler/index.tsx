import React, { ReactNode } from 'react';
import { DefaultLoading } from './DefaultLoading';
import { DefaultError } from './DefaultError';

function NetworkCallStateHandler({
    children,
    isLoading,
    error,
    onErrorRender,
    onIsLoadingRender,
}: {
    children: ReactNode | JSX.Element,
    isLoading?: boolean,
    error?: unknown,
    onErrorRender?: (error: unknown) => (ReactNode | JSX.Element),
    onIsLoadingRender?: () => (ReactNode | JSX.Element)
}) {

    if (isLoading) {
        if (typeof onIsLoadingRender === 'function') {
            return <>{onIsLoadingRender()}</>;
        }
        return <DefaultLoading />
    }

    if (error !== null && error !== undefined) {
        if(typeof onErrorRender === 'function') {
            return <>{onErrorRender(error)}</>;
        }
        return <DefaultError />;
    }

    return (
        <>{children}</>
    );
}

export { NetworkCallStateHandler }