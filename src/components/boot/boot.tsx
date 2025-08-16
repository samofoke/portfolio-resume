import React, { useState, useEffect } from "react";
import { Code } from "lucide-react";

type BootLoaderProp = {
  onComplete?: () => void;
};

const BootLoader: React.FC<BootLoaderProp> = ({ onComplete }) => {
  const [laoding, setLoading] = useState(true);
  const [bootMessages, setBootMessages] = useState<string[]>([]);
  const [bootProgress, setBootProgress] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

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

    return () => {
      handles.forEach((h) => clearInterval(h));
    };
  };

  useEffect(() => {
    const trigger = startBoot();
    return trigger;
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-terminal-black relative overflow-hidden"></div>
  );
};

export default BootLoader;
