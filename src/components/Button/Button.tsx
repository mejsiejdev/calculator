import { AnimatePresence, motion } from "framer-motion";
import { lazy, useState } from "react";
import { IconType } from "react-icons";
import styles from "./Button.module.css";

const Tooltip = lazy(() => import("../Tooltip"));

type Props = {
  content: IconType | string;
  onClick: () => void;
  tooltip?: string;
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
          : buttonData.style === "delete"
          ? styles.delete
          : styles.default
      }
      onClick={buttonData.onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {buttonData.tooltip && (
        <AnimatePresence>
          {showTooltip && <Tooltip content={buttonData.tooltip} />}
        </AnimatePresence>
      )}
      {typeof buttonData.content === "string" ? (
        <p
          className={
            buttonData.style === "primary"
              ? styles.primaryText
              : buttonData.style === "secondary"
              ? styles.secondaryText
              : buttonData.style === "delete"
              ? styles.deleteText
              : styles.defaultText
          }
        >
          {buttonData.content}
        </p>
      ) : (
        <buttonData.content
          className={
            buttonData.style === "primary"
              ? styles.primaryIcon
              : buttonData.style === "secondary"
              ? styles.secondaryIcon
              : buttonData.style === "delete"
              ? styles.deleteIcon
              : styles.defaultIcon
          }
        />
      )}
    </motion.button>
  );
};

export default Button;
