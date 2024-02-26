import React from "react";
import pixpulse from "../assets/Pixpulse.png";
import ytclone from "../assets/Yt-Clone.png";
import friendbook from "../assets/FriendsBook.png";

function Project() {
  const projects = [
    {
      id: 1,
      src: pixpulse,
      demo: "https://pixpulse.netlify.app/",
      code: "https://github.com/ajikyasharma/PixPulse_Frontend",
    },
    {
      id: 2,
      src: ytclone,
      demo: "https://yt-watchnet.netlify.app/",
      code: "https://github.com/ajikyasharma/YouTube-Clone",
    },
    {
      id: 3,
      src: friendbook,
      demo: "#",
      code: "https://github.com/ajikyasharma/FriendsBook",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full md:h-screen text-white pb-8 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-rose-500">
            Projects
          </p>
          <p className="py-6">
            Explore my projects showcasing a range of projects demonstrating
            proficiency in web development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
