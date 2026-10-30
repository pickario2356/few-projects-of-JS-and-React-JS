import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Stair = (props) => {
  const currentPath = useLocation().pathname;
  const pageRef = useRef(null);
  //   console.log(currentPath);

  const stairParentRef = useRef(null);
  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(stairParentRef.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.2,
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: 0.2,
        },
      });
      tl.to(stairParentRef.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0%",
      });

      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1.3,
        scale: 1.3,
        clearProps: "transform",
        onComplete: () => ScrollTrigger.refresh(),
      });
    },
    [currentPath],
  );
  return (
    <div>
      <div
        ref={stairParentRef}
        className=" parentStair h-screen w-full fixed top-0 z-10 "
      >
        <div className="h-full w-full flex ">
          <div className="stair bg-black h-full w-1/5  "></div>
          <div className="stair bg-black h-full w-1/5  "></div>
          <div className="stair bg-black h-full w-1/5  "></div>
          <div className="stair bg-black h-full w-1/5  "></div>
          <div className="stair bg-black h-full w-1/5  "></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stair;
