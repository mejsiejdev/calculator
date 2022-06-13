import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import Tooltip from "../Tooltip";
import styles from "./Button.module.css";

type Props = {
  content: IconType | "string";
  onClick: () => void;
  tooltip: string;
  style?: "primary" | "secondary" | "delete";
};

const Button: React.FC<Props> = (buttonData) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  return (
    <motion.button
      className={
        buttonData.style === "primary"
          ? styles.primary
          : buttonData.style === "secondary"
          ? styles.secondary
          : styles.delete
      }
      onClick={buttonData.onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <AnimatePresence>
        {showTooltip && <Tooltip content={buttonData.tooltip} />}
      </AnimatePresence>
      {typeof buttonData.content === "string" ? (
        <p>{buttonData.content}</p>
      ) : (
        <buttonData.content
          className={
            buttonData.style === "primary"
              ? styles.primaryIcon
              : buttonData.style === "secondary"
              ? styles.secondaryIcon
              : styles.deleteIcon
          }
        />
      )}
    </motion.button>
  );
};

export default Button;
