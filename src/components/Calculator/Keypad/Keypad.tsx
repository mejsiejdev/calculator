// React Redux
import { useDispatch } from "react-redux";
import { ActionCreators } from "redux-undo";
import {
  append,
  clear,
  calculate,
  negative,
} from "../../../features/calculator/calculatorSlice";

// React Icons
import { IconType } from "react-icons";
import {
  MdDelete,
  MdClose,
  MdRemove,
  MdAdd,
  MdDragHandle,
  MdUndo,
} from "react-icons/md";
import { RiPercentLine, RiDivideFill } from "react-icons/ri";
import Button from "../../Button";

type Action = {
  content: IconType | string;
  onClick: () => void;
  tooltip?: string;
  style?: "primary" | "secondary" | "delete";
};

const Keypad: React.FC = () => {
  const dispatch = useDispatch();
  const actions: Action[] = [
    {
      content: MdDelete,
      onClick: () => dispatch(clear()),
      tooltip: "Clear all",
      style: "delete",
    },
    {
      content: MdUndo,
      onClick: () => dispatch(ActionCreators.undo()),
      tooltip: "Undo",
      style: "secondary",
    },
    {
      content: RiPercentLine,
      onClick: () => dispatch(append("%")),
      tooltip: "Modulo / Percent",
      style: "secondary",
    },
    {
      content: RiDivideFill,
      onClick: () => dispatch(append("/")),
      tooltip: "Divide",
      style: "secondary",
    },
    {
      content: "7",
      onClick: () => dispatch(append("7")),
    },
    {
      content: "8",
      onClick: () => dispatch(append("8")),
    },
    {
      content: "9",
      onClick: () => dispatch(append("9")),
    },
    {
      content: MdClose,
      onClick: () => dispatch(append("*")),
      tooltip: "Multiply",
      style: "secondary",
    },
    {
      content: "4",
      onClick: () => dispatch(append("4")),
    },
    {
      content: "5",
      onClick: () => dispatch(append("5")),
    },
    {
      content: "6",
      onClick: () => dispatch(append("6")),
    },
    {
      content: MdRemove,
      onClick: () => dispatch(append("-")),
      tooltip: "Subtract",
      style: "secondary",
    },
    {
      content: "1",
      onClick: () => dispatch(append("1")),
    },
    {
      content: "2",
      onClick: () => dispatch(append("2")),
    },
    {
      content: "3",
      onClick: () => dispatch(append("3")),
    },
    {
      content: MdAdd,
      onClick: () => dispatch(append("+")),
      tooltip: "Add",
      style: "secondary",
    },
    {
      content: "+/-",
      onClick: () => dispatch(negative()),
    },
    {
      content: "0",
      onClick: () => dispatch(append("0")),
    },
    {
      content: ".",
      onClick: () => dispatch(append(".")),
    },
    {
      content: MdDragHandle,
      onClick: () => dispatch(calculate()),
      tooltip: "Calculate",
      style: "primary",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 w-full">
      {actions.map((action: Action, key) => (
        <Button {...action} key={key} />
      ))}
    </div>
  );
};

export default Keypad;
