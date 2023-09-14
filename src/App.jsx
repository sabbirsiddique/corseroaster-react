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
      <div className="bg-[#F3F3F3]">
        <h1 className="pt-8 text-center">Course Registration</h1>

        <Home></Home>
      </div>
    </>
  );
}

export default App;
