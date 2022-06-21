import { MdRefresh } from "react-icons/md";

const Spinner: React.FC = () => {
  return (
    <MdRefresh className="h-8 w-8 animate-spin fill-neutral-900 dark:fill-white" />
  );
};

export default Spinner;
