import { Route } from '../../../types/Route.type';
import { Pay } from './Content';
import { HeaderBack } from './HeaderBack';

export const PAY_ROUTE: Route = {
    Content: Pay,
    header: { HeaderBack },
    validate: () => {},
};