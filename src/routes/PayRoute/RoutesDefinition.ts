import { Route } from '../../types/Route.type';
import { INFO_ROUTE } from './InfoStep';
import { PAY_ROUTE } from './PayStep';
import { RESULT_ROUTE } from './ResultStep';

// Definición de rutas, la posición 0 será la ruta inicial, el orden de las siguientes no importa
const ROUTES_DEFINITION: Route[] = [
    INFO_ROUTE,
    PAY_ROUTE,
    RESULT_ROUTE,
];

export { ROUTES_DEFINITION };