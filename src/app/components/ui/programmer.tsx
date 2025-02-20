"use client"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Programmer = () => {
  return (
    <>
      <div className="lg:w-[500px] w-[20rem] z-40">
        <DotLottieReact
          src="/assets/lottie/prog.lottie"
          loop
          autoplay
        />
      </div>
    </>
  );
};
