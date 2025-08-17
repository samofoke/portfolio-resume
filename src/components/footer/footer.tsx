import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 text-center text-terminal-green/60 text-xs animate-fade-in delay-5">
      <p>
        © {new Date().getFullYear()} Terminal System | Full Stack Engineer.
      </p>
      <p className="mt-1">Sabata Mofokeng.</p>
    </footer>
  );
};

export default Footer;
