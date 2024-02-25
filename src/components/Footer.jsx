import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Footer() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} className="pl-2" />
        </>
      ),
      href: "https://www.linkedin.com/in/ajikya-sharma-140660228/",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} className="pl-2" />
        </>
      ),
      href: "https://github.com/ajikyasharma",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} className="pl-2" />
        </>
      ),
      href: "mailto:ajikyasharma24@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} className="pl-2" />
        </>
      ),
      href: "/Ajikya_resume.pdf",
      download: true,
    },
  ];
  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-rose-500">
            Links
          </p>
          <p className="py-6">
            Explore my social profiles to see more of my work and stay
            connected.
          </p>
        </div>
        <div className="w-full grid grid-cols-2  gap-8 text-center py-8 px-12 sm:px-0">
          {links.map(({ id, child, href, style, download }) => (
            <div key={id} className="hover:scale-110">
              <a
                className="flex justify-center  items-center"
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center py-4">
          <p>&copy; 2024 Ajikya Sharma. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
