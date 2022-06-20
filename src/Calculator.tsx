import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { IconType } from "react-icons";
import {
  MdDelete,
  MdOutlineBackspace,
  MdClose,
  MdRemove,
  MdAdd,
  MdDragHandle,
} from "react-icons/md";
import { RiPercentLine, RiDivideFill } from "react-icons/ri";

import Button from "./components/Button";

type Action = {
  content: IconType | string;
  onClick: () => void;
  tooltip?: string;
  style?: "primary" | "secondary" | "delete";
};

const operators = ["+", "-", "*", "/", "."];

const isTheLastCharacterAnOperator: Function = (str: string) => {
  const lastChar = str[str.length - 1];
  return [...operators].includes(lastChar);
};

const Calculator: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<string>("");
  let result: string = currentValue;
  if (!isTheLastCharacterAnOperator(currentValue)) {
    import("mathjs").then((math) => {
      result = math.format(math.evaluate(currentValue), {
        precision: 14,
      });
    });
    /*
    (async () => {
      const { default: evaluate } = await import("mathjs");
    })()*/
  }

  const performAction = (symbol: string) => {
    if (currentValue !== "") {
      if (isTheLastCharacterAnOperator(currentValue)) {
        setCurrentValue(`${currentValue.slice(0, -1)}${symbol}`);
      } else {
        setCurrentValue(`${currentValue}${symbol}`);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (e.key == "Backspace") {
      setCurrentValue(`${currentValue.slice(0, -1)}`);
    }
    if (e.key == "Delete") {
      setCurrentValue("");
    }
    if (["Enter", "="].includes(e.key)) {
      setCurrentValue(`${result}`);
    }
    if ([...operators, "(", ")"].includes(e.key)) {
      performAction(e.key);
    }
    if (numbers.includes(e.key)) {
      setCurrentValue(`${currentValue}${e.key}`);
    }
  };

  const actions: Action[] = [
    {
      content: MdDelete,
      onClick: () => setCurrentValue(""),
      tooltip: "Clear all",
      style: "delete",
    },
    {
      content: MdOutlineBackspace,
      onClick: () => setCurrentValue(currentValue.slice(0, -1)),
      tooltip: "Delete one character",
      style: "secondary",
    },
    {
      content: RiPercentLine,
      onClick: () => performAction("%"),
      tooltip: "Modulo / Percent",
      style: "secondary",
    },
    {
      content: RiDivideFill,
      onClick: () => performAction("/"),
      tooltip: "Divide",
      style: "secondary",
    },
    {
      content: "7",
      onClick: () => setCurrentValue(`${currentValue}7`),
    },
    {
      content: "8",
      onClick: () => setCurrentValue(`${currentValue}8`),
    },
    {
      content: "9",
      onClick: () => setCurrentValue(`${currentValue}9`),
    },
    {
      content: MdClose,
      onClick: () => performAction("*"),
      tooltip: "Multiply",
      style: "secondary",
    },
    {
      content: "4",
      onClick: () => setCurrentValue(`${currentValue}4`),
    },
    {
      content: "5",
      onClick: () => setCurrentValue(`${currentValue}5`),
    },
    {
      content: "6",
      onClick: () => setCurrentValue(`${currentValue}6`),
    },
    {
      content: MdRemove,
      onClick: () => performAction("-"),
      tooltip: "Subtract",
      style: "secondary",
    },
    {
      content: "1",
      onClick: () => setCurrentValue(`${currentValue}1`),
    },
    {
      content: "2",
      onClick: () => setCurrentValue(`${currentValue}2`),
    },
    {
      content: "3",
      onClick: () => setCurrentValue(`${currentValue}3`),
    },
    {
      content: MdAdd,
      onClick: () => performAction("+"),
      tooltip: "Add",
      style: "secondary",
    },
    {
      content: "+/-",
      onClick: () => {
        if (currentValue !== "") {
          setCurrentValue(`(-${currentValue})`);
        }
      },
    },
    {
      content: "0",
      onClick: () => {
        if (currentValue[currentValue.length - 1] !== "/") {
          setCurrentValue(`${currentValue}0`);
        }
      },
    },
    {
      content: ".",
      onClick: () => performAction("."),
    },
    {
      content: MdDragHandle,
      onClick: () => setCurrentValue(`${result}`),
      tooltip: "Calculate",
      style: "primary",
    },
  ];
  console.log("result: ", result);
  console.log("currentValue: ", currentValue);
  console.log("empty string: ", "")
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-sm w-full p-3 bg-white dark:bg-neutral-700/70 shadow-xl rounded-xl flex flex-col gap-3"
      onKeyDown={(e) => handleKeyPress(e)}
    >
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
      <hr />
      <div className="grid grid-cols-4 gap-3 w-full">
        {actions.map((action: Action, key) => (
          <Button {...action} key={key} />
        ))}
      </div>
    </motion.div>
  );
};

export default Calculator;
