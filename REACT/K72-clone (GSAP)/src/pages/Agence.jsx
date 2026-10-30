import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

// const imageArray = [
//   "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
//   "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
//   "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
//   "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
//   "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
//   "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
//   "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
//   "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
// ]; // Ye array fixed data hai. Na user se badalta hai, na kisi state se. Jo cheez kabhi badalti nahi, usko component ke andar rakhne ka koi fayda nahi.isliye ye agence kai and r nahi bahr hai

const imageArray = [
  "/imageArray/Carl_480x640.jpg",
  "/imageArray/Olivier_480x640.jpg",
  "/imageArray/ChantalG_480x640.jpg",
  "/imageArray/Michele_480X640.jpg",
  "/imageArray/MEL_480X640.jpg",
  "/imageArray/CAMILLE_480X640_2.jpg",
  "/imageArray/MEGGIE_480X640_2.jpg",
  "/imageArray/joel_480X640_3.jpg",
];
const Agence = () => {
  const imgaeDivRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(function () {
    gsap.to(imgaeDivRef.current, {
      scrollTrigger: {
        trigger: imgaeDivRef.current,
        // markers: true,
        start: "top 28%",
        end: "top -70%",
        scrub: 1,
        pin: true,
        // pinSpacing: true,
        // pinReparent: true,
        // pinType: "transform",
        // anticipatePin: 1,
        // invalidateOnRefresh: true,
        onUpdate: function (elem) {
          const imageIndex = Math.floor(elem.progress * imageArray.length);
          if (elem.progress < 1) {
            imageRef.current.src = imageArray[imageIndex];
          } // yaha one hone sai pehle hi if bnd ho ra
          if (elem.progress < 1) {
            const imageIndex =
              window.scrollY < 5 // condition ? valueIfTrue : valueIfFalse
                ? 0
                : Math.floor(elem.progress * imageArray.length);
            imageRef.current.src = imageArray[imageIndex];
          }
        },
      },
    });
  });

  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f5] h-full w-fit">
      <div className="section-1  ">
        <div
          ref={imgaeDivRef}
          className="absolute  overflow-hidden h-[22vw] rounded-3xl w-[15vw] top-48 left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="/imageArray/Carl_480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font1]">
          <div className="pt-[55vh]">
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
