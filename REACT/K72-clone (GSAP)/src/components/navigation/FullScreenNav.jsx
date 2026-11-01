import React from "react";

const FullScreenNav = () => {
  return (
    <div>
      <div className="bg-black text-white py-38 absolute w-screen h-screen">
        <div>
          <div className=" border-white border-y ">
            <h1 className="font-[font1] uppercase text-[8vw] text-center leading-[0.8] pt-4 ">
              Projects
            </h1>
            {/* <div className="flex items-center ">
              <h2>See Everything</h2>
              <img
                src="http://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt=""
              />
              <h2>See Everything</h2>
              <img
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
