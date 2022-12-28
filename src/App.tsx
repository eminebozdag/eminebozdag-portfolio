import React from "react";
import Index from "./pages";
function App() {
  return (
    <div className="flex h-full flex-col">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100"></div>
        </div>
      </div>
      <Index />
    </div>
  );
}

export default App;
