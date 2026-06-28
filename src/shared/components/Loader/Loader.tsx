import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";
import type { LoaderProps } from "./Loader.types";

export const Loader = ({ size = 60, color = "#667eea" }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <ClipLoader size={size} color={color} speedMultiplier={0.8} />
    </div>
  );
};