import AnimateWrapper from "@/app/components/ui/AnimateWrapper";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import NameAnimation from "./components/ui/NameAnimation";
import { Programmer } from "./components/ui/programmer";
import { TextGenerateEffectDemo } from "./components/ui/Text";

export default function Home() {
  return (
    <AnimateWrapper>
      <div className="flex justify-center md:mt-12 mt-2">
        <BackgroundBeamsWithCollision className="glass relative flex flex-col lg:flex-row shadow-2xl p-6 lg:p-16 rounded-2xl items-center border-2 border-neutral-700 backdrop-blur-md z-0 max-sm:m-5">
          <div className="mb-6 md:mb-0">
            <Programmer />
          </div>
          <div className="max-w-md space-y-6 md:space-y-10 md:ml-6 text-left">
            <div>
              <NameAnimation />
            </div>
            <TextGenerateEffectDemo />
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </AnimateWrapper>
  );
}
