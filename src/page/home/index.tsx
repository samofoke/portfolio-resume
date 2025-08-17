import React, { useState } from "react";
import BootLoader from "../../components/boot/boot.tsx";
import Terminal from "../../components/terminal/terminal.tsx";
import Footer from "../../components/footer/footer.tsx";

const MainPage: React.FC = () => {
  const [bootDone, setBootdone] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center px-4 py-8  relative overflow-hidden">
        {!bootDone ? (
          <BootLoader onComplete={() => setBootdone(true)} />
        ) : (
          <div>
            <div className="w-full max-w-6xl animate-fade-in relative">
              <Terminal />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
