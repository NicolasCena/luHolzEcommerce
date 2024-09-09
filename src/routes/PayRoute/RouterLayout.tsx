import { useEffect } from 'react';
import { ROUTES_DEFINITION } from './RoutesDefinition';
import { useStore } from 'react-redux';
import { State } from '../../types/State.type';
import { Header } from 'src/routes/PayRoute/components/Header';
import { RoutesEnum } from './RouterEnum';
import classNames from 'classnames';

function RouterLayout({
    routeIndex,
}: {
    routeIndex: string,
}) {
    const store = useStore();
    // valor del estado en el renderizado actual, se podría hacer con suscripciones useAppSeletor()
    const STATE: State = store.getState();
    const index = parseInt(routeIndex || '0', 10) || 0;

    const Route = ROUTES_DEFINITION[index];

    useEffect(() => {
        // compruebo si tenemos función de validación en la ruta
        if (typeof Route.validate === 'function') {
            try {
                Route.validate(STATE);
            } catch (err) {
                console.log(err)
            }
        }
    }, [Route]);

    const routeClassname = Object.keys(RoutesEnum)[Object.values(RoutesEnum).indexOf(index)];

    return (
        <>
            {!(Route?.hideHeader === true) && (
                <Header renderBackButton={Route.header?.HeaderBack} />
            )}

            <div className={classNames('route-content', `route-index-${index}`, routeClassname)}>
                <Route.Content />
            </div>

        </>
    );
}

export { RouterLayout };
