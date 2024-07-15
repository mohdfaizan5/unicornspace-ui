// "use client";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import AnimatedCounter from "./AnimatedCounter";

const SocialProof = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref);

  // const [benefits, setBenefits] = useState(0);
  // const [diseases, setDiseases] = useState(0);

  // useEffect(() => {
  //   console.log("Element is in view: ", isInView);
  //   if (isInView) {
  //     console.log("Element is in view: ", isInView);
  //     setTimeout(() => {
  //       for (let i = 0; i <= 7; i++) {
  //         setTimeout(() => {
  //           setDiseases(i);
  //         }, 500);
  //       }
  //       for (let i = 0; i <= 10; i++) {
  //         setTimeout(() => {
  //           setBenefits(i);
  //         }, 500);
  //       }
  //     }, 400);
  //   }
  // }, [isInView]);

  return (
    <div className="flex flex-col my-10 md:py-10">
      <section className="text-xs flex mx-auto gap-3 items-center">
        <span className="text-black flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          {/* <FaStarHalfAlt /> */}
        </span>
        <p>
          <span className="underline">10,852</span> Verified 5-star reviews
        </p>
      </section>
      <section className="flex gap-3 py-3 mx-auto">
        <div className="p-6 border w-44 flex flex-col items-center rounded-sm bg-white">
          <h2 className="gradient-brand text-4xl font-bold ">
            <AnimatedCounter from={0} to={10} /> +
          </h2>
          {/* <p className="text-xs">Satisfied</p> */}
          <h3 className="my-0">Benefits</h3>
        </div>
        <div className="p-6 border w-40 flex flex-col items-center rounded-sm bg-white">
          <h2 className="gradient-brand text-4xl font-bold ">
            <AnimatedCounter from={0} to={7} /> +
          </h2>
          <h3>Diseases</h3>
        </div>
      </section>
    </div>
  );
};

export default SocialProof;
