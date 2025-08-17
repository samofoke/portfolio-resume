import React, { useState } from "react";
import BootLoader from "../../components/boot/boot.tsx";
import Footer from "../../components/footer/footer.tsx";

const MainPage: React.FC = () => {
  const [bootDone, setBootdone] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="absolute inset-0 bg-grid-lines pointer-events-none" />
      <div className="absolute inset-0 scan-effect pointer-events-none" />

      <div className="flex flex-col items-center justify-center px-4 py-8  relative overflow-hidden">
        {!bootDone ? (
          <BootLoader onComplete={() => setBootdone(true)} />
        ) : (
          <>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
