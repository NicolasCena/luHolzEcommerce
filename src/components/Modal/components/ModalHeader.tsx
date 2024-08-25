import { ReactNode } from "react";
import styles from '../Modal.module.scss';

type Props = {
  children: ReactNode;
  onClose: () => void;
};

export const ModalHeader = ({ children, onClose }: Props ) => (
  <div className={styles.modalHeader}>
    <h2>{children}</h2>
    <button className={styles.closeButton} onClick={onClose}>
      ×
    </button>
  </div>
);
