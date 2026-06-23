import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";
import type { LoaderProps } from "./Loader.types";
export const Loader = ({ size = 40, color = "#3b82f6" }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <ClipLoader size={size} color={color} />
    </div>
  );
};
