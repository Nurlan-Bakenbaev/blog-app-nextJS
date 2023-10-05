''
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkModeToogle = () => {
  const {toggle,mode} = useContext(ThemeContext)

  return (
    <div className="relative flex gap-2 p-[2px] border-[1.5px] border-gray-400 rounded-[30px] ">
      <div>🌙</div>
      <div>🌕</div>
      <div
        className={`absolute w-[23px] h-[23px] cursor-pointer
         bg-green-600 rounded-full ${mode==='dark' ? 'right-0' : 'left-0'}`}
      />
    </div>
  );
};

export default DarkModeToogle;
