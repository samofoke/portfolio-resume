import React, { useState, useEffect } from "react";
import { Code } from "lucide-react";

type BootLoaderProp = {
  onComplete?: () => void;
};

const BootLoader: React.FC<BootLoaderProp> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [bootMessages, setBootMessages] = useState<string[]>([]);
  const [bootProgress, setBootProgress] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [connectionMessage, setConnectionMessage] = useState("");

  const bootSequence = [
    "Initializing system...",
    "Loading kernel modules...",
    "Checking security protocols...",
    "Mounting file systems...",
    "Starting network services...",
    "Establishing secure connection...",
    "Loading user interface...",
    "System ready.",
  ];

  const startBoot = () => {
    const handles: Array<number> = [];

    let currentMessage = 0;

    const messageInterval = window.setInterval(() => {
      if (currentMessage < bootSequence.length) {
        setBootMessages((prev) => [...prev, bootSequence[currentMessage]]);
        currentMessage++;
      } else {
        clearInterval(messageInterval);
      }
    }, 300);

    handles.push(messageInterval);

    const increment = 100 / (bootSequence.length * 3);

    const progressInterval = window.setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          const t = window.setTimeout(() => setLoading(false), 500);
          handles.push(t);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, 150);

    handles.push(progressInterval);

    const cursorInterval = window.setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    handles.push(cursorInterval);

    const secureConnectionText = "ESTABLISHING SECURE CONNECTION...";

    let i = 0;

    const typingInterval = window.setInterval(() => {
      if (i <= secureConnectionText.length) {
        setConnectionMessage(secureConnectionText.substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      handles.forEach((h) => clearInterval(h));
    };
  };

  useEffect(() => {
    const trigger = startBoot();
    return trigger;
  }, []);

  useEffect(() => {
    if (!loading) onComplete?.();
  }, [loading, onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-terminal-black relative overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 bg-grid-lines pointer-events-none"></div>

      {/* Terminal screen scan line effect */}
      <div className="absolute inset-0 scan-effect pointer-events-none"></div>

      {loading ? (
        <div className="text-center max-w-lg w-full backdrop-blur-sm p-6 rounded-lg border border-terminal-darkgray/30 bg-terminal-black/60">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code size={24} className="text-terminal-bronze" />
            <h1 className="cyberpunk-text text-terminal-bronze text-xl font-bold">
              EA SYSTEM
            </h1>
          </div>

          <div className="text-terminal-green text-left mb-4 h-40 overflow-hidden font-mono text-sm">
            {bootMessages.map((message, index) => (
              <div
                key={index}
                className="mb-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-terminal-purple mr-2">[SYSTEM]</span>{" "}
                {message}
              </div>
            ))}
          </div>

          <div className="text-terminal-cyan font-mono text-sm mb-3">
            {connectionMessage}
            <span
              className={`inline-block w-2 h-4 bg-terminal-bronze ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
            ></span>
          </div>

          <div className="w-full h-2 bg-terminal-darkgray/30 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-terminal-bronze via-terminal-purple to-terminal-pink transition-all duration-300 ease-out"
              style={{ width: `${bootProgress}%` }}
            ></div>
          </div>

          <div className="text-xs text-terminal-green/70 font-mono">
            {Math.round(bootProgress)}% complete
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BootLoader;
