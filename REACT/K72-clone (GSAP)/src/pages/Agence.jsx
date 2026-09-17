import React, { useRef } from "react";

const Agence = () => {

  const imgaeDivRef = useRef(null)
  return (
    <div>
      <div className="section-1">
        <div ref={imgaeDivRef} className="absolute overflow-hidden h-[22vw] rounded-3xl w-[15vw] top-48 left-[30vw] bg-red-500">
          <img
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative text-black font-[font1]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] font-[620] text-center leading-[18vw] ">
              SEVEN7Y <br></br>
              TWO
            </h1>
          </div>
          <div className="pl-[40%] ">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2"></div>
    </div>
  );
};

export default Agence;
