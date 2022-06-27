import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";

const Calculator = lazy(() => import("./components/Calculator"));

const App: React.FC = () => {
  return (
    <div className="w-full p-6 bg-neutral-100 dark:bg-neutral-900 min-h-screen flex flex-col items-center gap-4 justify-center outline-none">
      <div className="flex flex-col items-center gap-2">
        <p className="text-4xl font-bold text-neutral-900 dark:text-white">
          simple calculator
        </p>
        <p className="text-center">
          <span className="animate-wave inline-block origin-bottom-right mr-1.5">
            👋
          </span>
          Hello dear user! If you notice any issue, <br /> let me know about it
          on GitHub{" "}
          <a
            className="text-sky-400 font-semibold hover:text-sky-500 hover:underline transition"
            target={"_blank"}
            href="https://github.com/mejsiejdev/calculator/issues"
          >
            here.
          </a>
        </p>
      </div>
      <Suspense fallback={<Spinner />}>
        <Calculator />
      </Suspense>
    </div>
  );
};

export default App;
