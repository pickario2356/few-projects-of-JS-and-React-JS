import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font-2] gap-2 flex items-center justify-center">
      <Link
        className="text-[7.5vh] leading-[6vh] border-5 pt-3 rounded-full uppercase px-10 "
        to="/projects"
      >
        Projects
      </Link>
      <Link
        className="text-[7.5vh] leading-[6vh]  border-5 pt-3 rounded-full uppercase px-10 "
        to="/agence"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
