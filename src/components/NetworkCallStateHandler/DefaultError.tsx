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
        <dialog>
            
        </dialog>
    );
}

export { DefaultError };