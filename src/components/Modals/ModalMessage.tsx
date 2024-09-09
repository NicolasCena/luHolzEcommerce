import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import styles from "./Modal.module.scss";

type Props = {
  title: string;
  icon: string;
  onClose: () => void;
  show: boolean;
};

export const ModalMessage = ({ title, icon, onClose, show }: Props) => {
  return (
    <Modal show={show} >
      <ModalHeader>
        <button onClick={onClose}>
          <i className="icon-xmark" />
        </button>
      </ModalHeader>
      <ModalBody>
        <h2>{title}</h2>
        <i className={icon} />
      </ModalBody>
      <ModalFooter>
        <button onClick={onClose} >Aceptar</button>
      </ModalFooter>
    </Modal>
  );
};
