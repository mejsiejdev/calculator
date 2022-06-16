import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";

const Calculator = lazy(() => import("./Calculator"));

const App: React.FC = () => {
  return (
    <div className="w-full p-6 bg-neutral-100 dark:bg-neutral-900 min-h-screen flex flex-col items-center gap-6 justify-center outline-none">
      <p className="text-4xl font-semibold text-neutral-900 dark:text-white">
        simple calculator
      </p>
      <Suspense fallback={<Spinner />}>
        <Calculator />
      </Suspense>
    </div>
  );
};

export default App;
