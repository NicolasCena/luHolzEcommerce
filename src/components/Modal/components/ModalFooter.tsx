import { ReactNode } from "react";
import styles from "../styles.module.scss";

type Props = {
  children: ReactNode;
};

export const ModalFooter = ({ children }: Props) => (
  <div className={styles.modalFooter}>{children}</div>
);
