import { useRouteNavigation } from '../hook/useRouteNavigation'
import { RoutesEnum } from '../RouterEnum';
import { useTranslation } from 'react-i18next';

function HeaderGoBackButton({
    path,
    onClick,
    isDisabled = false,
}: {
    path: RoutesEnum,
    onClick?: () => void,
    isDisabled?: boolean,
}) {
    const navigate = useRouteNavigation();
    const { t } = useTranslation();

    const handleClick = () => {
        if(typeof onClick === 'function') {
            return onClick();
        }        
        navigate(path);
    };

    return (
        <button type="button" onClick={handleClick} disabled={isDisabled}>
            <i className='icon-flecha-alta' />
            <p>{t('back_header')}</p>
        </button>
    )
}

export { HeaderGoBackButton };