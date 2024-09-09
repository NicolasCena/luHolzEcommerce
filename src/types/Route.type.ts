import { State } from './State.type';

export type Route = {
    Content: () => JSX.Element;
    header?: { HeaderClose?: () => JSX.Element, HeaderBack?: () => JSX.Element };
    validate?: (state: State) => void;
    hideHeader?: boolean,
};
