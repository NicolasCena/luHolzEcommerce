import { ReactNode } from "react";
import styles from "../styles.module.scss";

type Props = {
  children: ReactNode;
};

export const ModalBody = ({ children }: Props) => (
  <div className={styles.modalBody}>{children}</div>
);
