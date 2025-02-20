import { Metadata } from "next";
import { Form } from "./components/common/form";
import AnimateWrapper from "../components/ui/AnimateWrapper";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ali Ghafari. Contact me for collaboration, web development projects, or any inquiries.",
  keywords:
    "Ali Ghafari, Contact, Get in touch, Web Developer, Next.js, React, Collaboration, Freelance",
  robots: "index, follow",
  openGraph: {
    title: "Contact Ali Ghafari",
    description:
      "Reach out to Ali Ghafari for collaboration, web development projects, or any inquiries.",
    url: "https://alighafari.com/contact",
    siteName: "Ali Ghafari Portfolio",
    type: "website",
  },
};

function Contact() {
  return (
    <AnimateWrapper>
      <Form />
    </AnimateWrapper>
  );
}

export default Contact;
