import { ModalMessage } from '@components/Modals/ModalMessage';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function DefaultError({ 
    onClose 
}: {
    onClose?: () => void
}) {
    const [show, setShow] = useState(true);
    const { t } = useTranslation();

    const handleClose = () => {
        if(typeof onClose === 'function') {
            onClose();
        } 
        setShow(false);
    };

    if(!show) {
        return <></>;
    }

    return (
        <ModalMessage title='prueba' icon='icon-cancel' onClose={handleClose} show={show} />
    );
}

export { DefaultError };