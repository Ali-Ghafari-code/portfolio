import { Metadata } from "next";
import Soon from "./components/ui/soon"

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog ali ghafri write",
};


function About() {
  return <div>
    <Soon />
  </div>;
}

export default About;
