import React from "react";
import TerminalHeader from "./header/header";

const Terminal: React.FC = () => {
  return (
    <div className="min-h-[70vh] max-h-[80vh] mx-auto my-8 md:my-12 bg-terminal-black transition-all duration-300 relative">
      <TerminalHeader />
      The terminal hear.....
    </div>
  );
};

export default Terminal;
