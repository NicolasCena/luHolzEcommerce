import { ReactNode } from "react";
import styles from "../Modal.module.scss";

type Props = {
  children: ReactNode;
};

export const ModalFooter = ({ children }: Props) => (
  <div className={styles.modalFooter}>{children}</div>
);
