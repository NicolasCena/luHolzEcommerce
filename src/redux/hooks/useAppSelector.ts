import { useSelector } from 'react-redux';
import { State } from '../../types/State.type';

function useAppSelector<TState = State, TSelected = unknown>(fn:(state: TState) => TSelected) {
    const val = useSelector(fn);
    return val;
}

export { useAppSelector };