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
  MdOutlineCalculate,
} from "react-icons/md";
import { RiPercentLine, RiDivideFill } from "react-icons/ri";
import Button from "./components/Button";

type Action = {
  content: IconType | string;
  onClick: () => void;
  tooltip?: string;
  style?: "primary" | "secondary" | "delete";
};

const actions: Action[] = [
  {
    content: MdDelete,
    onClick: () => {},
    tooltip: "Clear all",
    style: "delete",
  },
  {
    content: MdOutlineBackspace,
    onClick: () => {},
    tooltip: "Delete one character",
    style: "secondary",
  },
  {
    content: RiPercentLine,
    onClick: () => {},
    tooltip: "Modulo",
    style: "secondary",
  },
  {
    content: RiDivideFill,
    onClick: () => {},
    tooltip: "Divide",
    style: "secondary",
  },
  {
    content: "7",
    onClick: () => {},
  },
  {
    content: "8",
    onClick: () => {},
  },
  {
    content: "9",
    onClick: () => {},
  },
  {
    content: MdClose,
    onClick: () => {},
    tooltip: "Multiply",
    style: "secondary",
  },
  {
    content: "4",
    onClick: () => {},
  },
  {
    content: "5",
    onClick: () => {},
  },
  {
    content: "6",
    onClick: () => {},
  },
  {
    content: MdRemove,
    onClick: () => {},
    tooltip: "Subtract",
    style: "secondary",
  },
  {
    content: "1",
    onClick: () => {},
  },
  {
    content: "2",
    onClick: () => {},
  },
  {
    content: "3",
    onClick: () => {},
  },
  {
    content: MdAdd,
    onClick: () => {},
    tooltip: "Add",
    style: "secondary",
  },
  {
    content: "+/-",
    onClick: () => {},
  },
  {
    content: "0",
    onClick: () => {},
  },
  {
    content: ".",
    onClick: () => {},
  },
  {
    content: MdDragHandle,
    onClick: () => {},
    tooltip: "Calculate",
    style: "primary",
  },
];

const App: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<string>("sqrt(4)");
  const result = format(evaluate(currentValue), { precision: 14 });
  return (
    <div className="w-full bg-slate-100 min-h-screen flex flex-col items-center gap-6 justify-center">
      <div className="flex flex-row items-center justify-center gap-2">
        <p className="text-4xl font-semibold">Calculator</p>
        <MdOutlineCalculate className="h-12 w-12" />
      </div>
      <div className="max-w-sm w-full p-3 bg-white shadow-xl rounded-xl flex flex-col gap-3">
        <div className="flex flex-col items-end justify-center gap-1">
          <p className="text-4xl font-bold">{currentValue}</p>
          {currentValue === result ? null : currentValue !== "" ? (
            <p className="text-slate-600 text-xl">{result}</p>
          ) : (
            <p className="text-slate-600 text-xl">Start calculating!</p>
          )}
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
