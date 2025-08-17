import React from "react";

const TerminalHeader: React.FC = () => {
  return (
    <div className="terminal-header relative flex items-center py-2 px-4 bg-gradient-to-r from-terminal-darkgray to-terminal-black border-b border-terminal-cyan/20">
      <div className="flex space-x-2 items-center">
        <div className="terminal-button bg-red-500 w-3 h-3 rounded-full hover:opacity-80 cursor-pointer"></div>
        <div className="terminal-button bg-yellow-500 w-3 h-3 rounded-full hover:opacity-80 cursor-pointer"></div>
        <div className="terminal-button bg-green-500 w-3 h-3 rounded-full hover:opacity-80 cursor-pointer"></div>
      </div>

      <div className="cyberpunk-bar absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-terminal-cyan/10 via-terminal-pink/60 to-terminal-cyan/10"></div>

      <div className="text-xs text-center flex-1 text-terminal-cyan font-bold cyberpunk-text flex items-center justify-center">
        <span>user@Sabata: ~/portfolio</span>
        <span className="hidden sm:inline-block mx-2 w-2 h-0.5 bg-terminal-cyan/50 rounded"></span>
        <span className="hidden sm:inline-block text-terminal-pink"></span>
      </div>

      <div className="hidden sm:flex space-x-2 text-terminal-green/60"></div>
    </div>
  );
};

export default TerminalHeader;
