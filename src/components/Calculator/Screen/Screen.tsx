import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

import { format } from "mathjs";
import store from "../../../app/store";

const operators = ["+", "-", "*", "/", "."];

const isTheLastCharacterAnOperator: Function = (str: string) => {
  const lastChar = str[str.length - 1];
  return operators.includes(lastChar);
};

const Screen: React.FC = () => {
  const currentValue = useSelector(
    (state: ReturnType<typeof store.getState>) => state.calculator.value
  );
  let result: string = currentValue;
  if (currentValue !== "") {
    if (!isTheLastCharacterAnOperator(currentValue)) {
      result = format(eval(currentValue), {
        precision: 14,
      });
    }
  }
  return (
    <div className="flex flex-col items-end justify-start gap-1">
      <p className="text-4xl font-bold truncate pb-1 text-neutral-900 dark:text-white">
        {currentValue}
      </p>
      <AnimatePresence>
        {(currentValue !== result || result === "") && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-neutral-800 dark:text-neutral-300 text-xl"
          >
            {currentValue !== "" ? result : "Pass in some values."}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Screen;
