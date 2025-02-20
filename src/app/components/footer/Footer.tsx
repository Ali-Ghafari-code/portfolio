import { IoLogoInstagram, IoLogoGithub, IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div className="flex justify-center mt-16 space-x-10">
      <a
        href="https://www.instagram.com/ali.a.ghaffari/?igsh=ZnF5MzA1NjlnMDBp#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-rose-600 transform hover:scale-125 transition duration-300 ease-in-out"
      >
        <IoLogoInstagram size={26} />
      </a>
      <a
        href="https://github.com/Ali-Ghafari-code"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-purple-700 transform hover:scale-125 transition duration-300 ease-in-out"
      >
        <IoLogoGithub size={26} />
      </a>
      <a
        href="mailto:alighafari.code@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-sky-500 transform hover:scale-125 transition duration-300 ease-in-out"
      >
        <IoMail size={26} />
      </a>
    </div>
  );
}

export default Footer;
