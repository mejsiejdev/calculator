import { motion } from "framer-motion";
import styles from "./Tooltip.module.css";

type Props = {
  content: string;
};

const Tooltip: React.FC<Props> = ({ content }) => {
  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0, y: 45 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 45 }}
      className={styles.body}
    >
      <p className={styles.text}>{content}</p>
    </motion.div>
  );
};

export default Tooltip;
