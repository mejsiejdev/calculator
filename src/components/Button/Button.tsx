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

const Button: React.FC<Props> = (props) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  return (
    <motion.button
      className={
        props.style === "primary"
          ? styles.primary
          : props.style === "secondary"
          ? styles.secondary
          : props.style === "delete"
          ? styles.delete
          : styles.default
      }
      aria-label={typeof props.content === "string" ? props.content : props.tooltip}
      onClick={props.onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {props.tooltip && (
        <AnimatePresence>
          {showTooltip && <Tooltip content={props.tooltip} />}
        </AnimatePresence>
      )}
      {typeof props.content === "string" ? (
        <p
          className={
            props.style === "primary"
              ? styles.primaryText
              : props.style === "secondary"
              ? styles.secondaryText
              : props.style === "delete"
              ? styles.deleteText
              : styles.defaultText
          }
        >
          {props.content}
        </p>
      ) : (
        <props.content
          className={
            props.style === "primary"
              ? styles.primaryIcon
              : props.style === "secondary"
              ? styles.secondaryIcon
              : props.style === "delete"
              ? styles.deleteIcon
              : styles.defaultIcon
          }
        />
      )}
    </motion.button>
  );
};

export default Button;
