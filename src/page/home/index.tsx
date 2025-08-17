import React from "react";
import BootLoader from "../../components/boot/boot.tsx";

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center px-4 py-8  relative overflow-hidden">
        <BootLoader />
      </div>
    </div>
  );
};

export default MainPage;
