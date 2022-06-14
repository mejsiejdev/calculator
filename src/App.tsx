import { useState } from "react";
import { evaluate, format } from "mathjs";
import { IconType } from "react-icons";
import {
  MdClose,
  MdRemove,
  MdAdd,
  MdDelete,
  MdDragHandle,
  MdOutlineBackspace,
} from "react-icons/md";
import { RiPercentLine, RiDivideFill } from "react-icons/ri";
import Button from "./components/Button";
import { AnimatePresence, motion } from "framer-motion";

type Action = {
  content: IconType | string;
  onClick: () => void;
  tooltip?: string;
  style?: "primary" | "secondary" | "delete";
};

const isTheLastCharacterAnOperator = (str: string) => {
  const lastChar = str[str.length - 1];
  return (
    lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"
  );
};

const App: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<string>("");
  let result: string = currentValue;
  if (!isTheLastCharacterAnOperator(currentValue)) {
    result = format(evaluate(currentValue), { precision: 14 });
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
      tooltip: "Modulo",
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
  return (
    <div className="w-full bg-slate-100 min-h-screen flex flex-col items-center gap-6 justify-center">
      <p className="text-4xl font-semibold">simple calculator</p>
      <div className="max-w-sm w-full p-3 bg-white shadow-xl rounded-xl flex flex-col gap-3">
        <div className="flex flex-col items-end justify-start gap-1">
          <p className="text-4xl font-bold truncate pb-1">{currentValue}</p>
          <AnimatePresence>
            {currentValue === result ? null : currentValue !== "" ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-slate-600 text-xl"
              >
                {result}
              </motion.p>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-slate-600 text-xl animate-pulse"
              >
                Pass in some values.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <hr />
        <div className="grid grid-cols-4 gap-2 w-full">
          {actions.map((action: Action, key) => (
            <Button {...action} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
