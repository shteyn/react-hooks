import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookObject from "./components/HookObject";
import HookArray from "./components/HookArray";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <HookObject />
      <HookArray />
    </div>
  );
}

export default App;
