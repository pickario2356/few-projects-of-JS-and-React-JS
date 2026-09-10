import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center">
      <div className="uppercase text-[9.5vw] flex items-center justify-center  leading-[9.5vw] ">
        The spark for
      </div>
      <div className="uppercase text-[9.5vw] flex items-center justify-center leading-[9.5vw] ">
        all
        <div className="h-[7vw] rounded-full -mt-3 overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="uppercase text-[9.5vw] flex items-center justify-center  leading-[9.5vw] ">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
