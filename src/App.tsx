import { IconType } from "react-icons";
import {
  MdClose,
  MdRemove,
  MdAdd,
  MdDelete,
  MdDragHandle,
} from "react-icons/md";
import { RiDivideFill } from "react-icons/ri";
import Button from "./components/Button";

const buttons = ["C", "()", "%", 1, 2, 3, 4, 5, 6, 7, 8, 9, "+/-", 0, "."];

type Action = {
  content: IconType | "string";
  onClick: () => void;
  tooltip: string;
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
    content: RiDivideFill,
    onClick: () => {},
    tooltip: "Divide",
    style: "secondary",
  },
  {
    content: MdClose,
    onClick: () => {},
    tooltip: "Multiply",
    style: "secondary",
  },
  {
    content: MdRemove,
    onClick: () => {},
    tooltip: "Subtract",
    style: "secondary",
  },
  {
    content: MdAdd,
    onClick: () => {},
    tooltip: "Add",
    style: "secondary",
  },
  {
    content: MdDragHandle,
    onClick: () => {},
    tooltip: "Calculate",
    style: "secondary",
  },
];

const App: React.FC = () => {
  console.log(typeof actions[0].content);
  return (
    <div className="w-full bg-slate-100 min-h-screen flex flex-col items-center gap-6 justify-center">
      <p className="text-4xl font-semibold">Calculator</p>
      <div className="max-w-sm w-full p-3 bg-white shadow-xl rounded-xl flex flex-col gap-3">
        <div className="flex flex-col items-end justify-center">
          <p className="text-3xl font-bold">7324872364823647823</p>
          <p className="text-slate-600">364364+4545</p>
        </div>
        <hr />
        <div className="grid grid-cols-4 gap-2 w-full">
          {/*
            <div className="border-2 p-1 rounded-xl hover:bg-red-50 cursor-pointer border-red-400 flex flex-row items-center justify-center transition">
              <MdDeleteOutline className="h-10 w-10 fill-red-500" />
            </div>
            <div className="border-2 p-1 rounded-xl hover:bg-green-50 cursor-pointer border-green-300 flex flex-row items-center justify-center transition">
              <RiDivideFill className="h-10 w-10 fill-green-400" />
            </div>
            <div className="border-2 p-1 rounded-xl hover:bg-green-50 cursor-pointer border-green-300 flex flex-row items-center justify-center transition">
              <MdRemove className="h-10 w-10 fill-green-400" />
            </div>
            <div className="border-2 p-1 rounded-xl hover:bg-green-50 cursor-pointer border-green-300 flex flex-row items-center justify-center transition">
              <MdAdd className="h-10 w-10 fill-green-400" />
            </div>
            <div className="border-2 p-1 rounded-xl hover:bg-green-50 cursor-pointer border-green-300 flex flex-row items-center justify-center transition">
              <MdClose className="h-10 w-10 fill-green-400" />
            </div>
            <div className="p-1 rounded-xl hover:bg-green-500 cursor-pointer bg-green-400 flex flex-row items-center justify-center transition">
              <MdDragHandle className="h-10 w-10 fill-white" />
            </div>
            */}

          {/*buttons.map((button) => (
            <div className="border-2 p-1 rounded-xl hover:bg-slate-50 cursor-pointer border-slate-600 flex flex-row items-center justify-center transition">
              <p className="text-2xl font-bold text-slate-700">{button}</p>
            </div>
          ))*/}
          {actions.map((action: Action, key) => (
            <Button {...action} key={key}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
