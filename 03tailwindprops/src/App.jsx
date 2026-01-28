import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="p-4 text-black bg-green-400 rounded-xl">Tailwind Test</h1>

      <div className="max-w-xs text-gray-100 bg-black rounded-md shadow-md">
        <img
          src="https://picsum.photos/301"
          alt=""
          className="object-cover object-center w-full bg-gray-500 rounded-t-md h-72"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">Lorem</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio tempora ipsum soluta amet corporis accusantium aliquid
              consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide text-gray-200 bg-gray-800 rounded-md"
          >
            Read more
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
