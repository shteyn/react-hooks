import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookObject from "./components/HookObject";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <HookObject />
    </div>
  );
}

export default App;
