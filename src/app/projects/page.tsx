import { Metadata } from "next";
import { ProjectCard } from "./components/common/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Ali Ghafari's web development projects built with Next.js, React, and modern technologies.",
  keywords:
    "Ali Ghafari, Projects, Portfolio, Frontend Developer, Next.js, React, Web Development, JavaScript",
  robots: "index, follow",
  openGraph: {
    title: "Ali Ghafari's Projects",
    description:
      "Discover web development projects by Ali Ghafari, a Junior Frontend Developer specializing in Next.js and React.",
    url: "https://alighafari.com/projects",
    siteName: "Ali Ghafari Portfolio",
    type: "website",
  },
};

function Projects() {
  return (
    <div>
      <ProjectCard />
    </div>
  );
}

export default Projects;
