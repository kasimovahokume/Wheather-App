import styles from "./DetailCard.module.css";
import type { DetailCardProps } from "./DetailCard.types";

export const DetailCard = ({ title, value }: DetailCardProps) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};