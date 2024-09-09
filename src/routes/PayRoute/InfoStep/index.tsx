import { Route } from '../../../types/Route.type';
import { InfoUser } from './Content';
import { HeaderBack } from './HeaderBack';

export const INFO_ROUTE: Route = {
    Content: InfoUser,
    header: { HeaderBack },
    validate: () => {},
};