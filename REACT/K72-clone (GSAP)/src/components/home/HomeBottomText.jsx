import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font1] gap-4 flex overflow-hidden items-center justify-center px-[5vw]">
      <Link
        className="text-[7.5vw] leading-[6vw] border-3 pt-3 rounded-full uppercase px-10 "
        to="/projects"
      >
        Projects
      </Link>
      <Link
        className="text-[7.5vw] leading-[6vw]  border-3 pt-3 rounded-full uppercase px-10 "
        to="/agence"
      >
        Agency
      </Link>
    </div>
  );
};

export default HomeBottomText;
