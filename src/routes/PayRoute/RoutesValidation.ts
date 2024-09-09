import { RoutesEnum } from './RouterEnum';

class RouteValidationError extends Error {
    redirectTo: RoutesEnum;

    constructor(redirectTo: RoutesEnum) {
        super();
        this.redirectTo = redirectTo;
    }
}

export {
    RouteValidationError,
};