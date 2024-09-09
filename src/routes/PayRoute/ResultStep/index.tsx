import { Route } from '../../../types/Route.type';
import { Result } from './Content';
import { HeaderBack } from './HeaderBack';

export const RESULT_ROUTE: Route = {
    Content: Result,
    header: { HeaderBack },
    validate: () => {},
};