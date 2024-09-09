import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../RouterEnum';

function useRouteNavigation() {
    const navigate = useNavigate();

    return (path: RoutesEnum) => {
        const p = `/${path}`;
        navigate(p)
    };
}

export { useRouteNavigation };