import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

function useAppDispatch() {
    const dispatch = useDispatch();

    function appDispatch<T = Dispatch<any>>(action: { type: string, value: T }) {
        return dispatch(action)
    }

    return appDispatch;
}

export { useAppDispatch }; 