"use client";
import { Typewriter } from "react-simple-typewriter";

function NameAnimation() {
  return (
    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-info">
      <h2>
        I am,{" "}
        <span className="text-primary">
          <Typewriter
            words={["Ali Ghafari"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={100}
          />
        </span>
      </h2>
    </div>
  );
}

export default NameAnimation;
