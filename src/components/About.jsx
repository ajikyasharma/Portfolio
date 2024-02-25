import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-rose-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          Hello! I'm Ajikya Sharma, a Computer Science student with a passion
          for crafting innovative digital solutions. I specialize in Full Stack
          Development, where I blend creativity with technical expertise to
          build engaging web applications.
        </p>

        <br />
        <p className="text-xl">
          With a strong foundation in algorithms, data structures, and software
          engineering principles, I bring a structured approach to my work. I
          thrive in collaborative environments, where I can leverage my skills
          in front-end and back-end development to create seamless user
          experiences. Let's collaborate and turn ideas into digital realities!
        </p>
      </div>
    </div>
  );
}

export default About;
