import { ReactNode } from "react";
import styles from "../Modal.module.scss";

type Props = {
  children: ReactNode;
};

export const ModalBody = ({ children }: Props) => (
  <div className={styles.modalBody}>{children}</div>
);
