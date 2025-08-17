import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 text-center text-terminal-green/60 text-xs animate-fade-in delay-5">
      <p>
        © {new Date().getFullYear()} EA System | Full Stack Developer Portfolio
      </p>
      <p className="mt-1">Built with React + TypeScript + Vite</p>
    </footer>
  );
};

export default Footer;
