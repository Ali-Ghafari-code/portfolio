import { Metadata } from "next";
import Timeline from "./components/common/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Explore Ali Ghafari's technical skills, including Next.js, React, JavaScript, and modern web technologies.",
  keywords: "Ali Ghafari, Frontend Developer, Skills, Next.js, React, JavaScript, Web Development, Programming",
  robots: "index, follow",
  openGraph: {
    title: "Ali Ghafari's Skills",
    description: "Discover the technical skills of Ali Ghafari, a Junior Frontend Developer specialized in Next.js and React.",
    url: "https://alighafari.com/skills",
    siteName: "Ali Ghafari Portfolio",
    type: "website",
  },
};

function Skills() {
  return(
    <Timeline />
  )
}

export default Skills;
