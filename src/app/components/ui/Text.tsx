"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `I am a passionate Junior Web Developer with a strong foundation in
            building interactive websites and web applications. I am always
            eager to learn and grow, keeping up with the latest trends and best
            practices in web development. My goal is to craft seamless digital
            experiences and contribute to innovative projects.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
