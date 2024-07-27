import "./App.css";
import Navbar from "./Navbar";
import Textutils from "./Textutils";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState } from "react";


function App() {


  const [Mode, setMode] = useState("dark");

  const Togglemode = () => {
    if (Mode === "dark") {
      setMode("light");

      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "white";
    }
  };



  return (
    <>
      <Navbar mode={Mode} togglemode={Togglemode} />
      <Textutils mode={Mode} />

      </>
  );
}

export default App;











