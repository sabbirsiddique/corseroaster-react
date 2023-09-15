/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-100">
        <h1 className="pt-8 mb-8 text-center text-[32px] text-[#1C1B1B] font-bold">Course Registration</h1>

        <Home></Home>
      </div>
    </>
  );
}

export default App;
