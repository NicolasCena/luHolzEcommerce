import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDeleteUser } from "src/hooks/useDeleteUser";

type Props = {
  onClose: () => void;
  show: boolean;
};

export const ModalDeleteUser = ({ show, onClose }: Props) => {
  const { t } = useTranslation();
  const { deleteUserProfile } = useDeleteUser();


  return (
    <Modal show={show}>
      <ModalHeader>
        <button onClick={onClose}>
          <i className="icon-xmark" />
        </button>
      </ModalHeader>
      <ModalBody>
        <h2>¿Estás seguro que deseas eliminar tu cuenta?</h2>
      </ModalBody>
      <ModalFooter>
        <button onClick={deleteUserProfile} type="button">Si, borrar la cuenta</button>
        <button onClick={onClose} type="button">Cancelar</button>
      </ModalFooter>
    </Modal>
  );
};
