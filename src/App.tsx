import Calculator from "./Calculator";

const App: React.FC = () => {
  return (
    <div className="w-full p-6 bg-slate-100 min-h-screen flex flex-col items-center gap-6 justify-center outline-none">
      <p className="text-4xl font-semibold">simple calculator</p>
      <Calculator />
    </div>
  );
};

export default App;
