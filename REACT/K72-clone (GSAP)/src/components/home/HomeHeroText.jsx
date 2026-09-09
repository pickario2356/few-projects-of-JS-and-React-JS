import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center">
      <div className="uppercase text-[9.5vh] flex items-center justify-center  leading-[9.5vh] ">
        The spark for
      </div>
      <div className="uppercase text-[9.5vh] flex items-center justify-center leading-[9.5vh] ">
        all
        <div className="h-[8vh] rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="uppercase text-[9.5vh] flex items-center justify-center  leading-[9.5vh] ">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
