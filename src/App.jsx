import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
  return (
    <div className="relative h-screen w-full  bg-zinc-900">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
