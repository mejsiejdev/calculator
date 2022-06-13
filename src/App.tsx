import { MdClose, MdRemove, MdAdd, MdDeleteOutline, MdDragHandle } from "react-icons/md";
import { RiDivideFill } from "react-icons/ri";

const App: React.FC = () => {
  return (
    <div className="w-full bg-slate-100 min-h-screen flex flex-col items-center justify-center">
      <div className="p-3 bg-white shadow-xl rounded-xl">
        <div className="grid grid-cols-4 gap-2">
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
          <div className="p-1 rounded-xl hover:bg-green-300 cursor-pointer bg-green-400 flex flex-row items-center justify-center transition">
            <MdDragHandle className="h-10 w-10 fill-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
