import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { State } from '../../types/State.type';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
