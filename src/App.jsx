import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainLogic from "./Components/Main_logic";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainLogic time = {["hours" , "minutes" , "seconds"]}/>
    </>
  );
}

export default App;
