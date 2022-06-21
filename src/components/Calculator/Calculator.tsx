import { motion } from "framer-motion";

import Keypad from "./Keypad";
import Screen from "./Screen";

const Calculator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-sm w-full p-3 bg-white dark:bg-neutral-700/70 shadow-xl rounded-xl flex flex-col gap-3"
    >
      <Screen />
      <hr />
      <Keypad />
    </motion.div>
  );
};

export default Calculator;
