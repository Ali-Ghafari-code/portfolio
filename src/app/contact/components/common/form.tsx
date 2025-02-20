"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.fullname || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    emailjs
      .sendForm(
        "service_yiisnkp",
        "template_jdb1myt",
        e.target as HTMLFormElement,
        "N1RaRdeyV7V3VxSZ5"
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
          setFormData({ fullname: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Email sending error:", error.text);
          toast.error("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className="mx-auto w-full max-w-md lg:max-w-3xl rounded-xl shadow-2xl p-6 -mt-10">
      <h2 className="text-2xl font-bold text-center">Contact Me</h2>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="fullname">Full Name</Label>
          <Input id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Tyler Durden" type="text" required />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="projectmayhem@fc.com" type="email" required />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" type="text" required />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <Input id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Enter Your Message" className="textarea textarea-bordered w-full textarea-info h-24" required />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 w-full text-white rounded-md h-10 font-medium shadow-md"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
