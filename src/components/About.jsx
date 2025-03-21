import React from "react";

function About() {
  return (<>
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 text">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* About Me Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold relative">
            About me
            <span className="absolute left-0 bottom-0 w-10 h-1 bg-yellow-500"></span>
          </h1>
          <p className="text-black-300 text-justify leading-relaxed">
            Hi there! I'm an eager developer who likes to write code and make new stuff. 
            I'm working toward a Bachelor of Technology in Computer Science Engineering. 
            I'm always willing to learn about and experiment with new technologies. I am skilled in 
            many programming languages and technologies, including C, Java, JavaScript, and React. 
            I'm constantly looking for new projects to work on and possibilities to interact with other 
            devs. I'm excited to grow as a developer, learn new things, and contribute to the tech sector.
          </p>
        </div>

        {/* Qualification Section */}
        <div className="md:w-1/1.5 space-y-4">
          <h1 className="text-3xl font-bold relative">
            Qualifications
            <span className="absolute left-1 bottom-0 w-10 h-1 bg-yellow-500"></span>
          </h1>
          <div className="border-l-4 border-yellow-500 pl-4 space-y-3">
            {/* First Education */}
            <div className="space-y-3">
              <h2 className="text-black-400 text-sm leading-tight">2019-2020 | JKBOSE</h2>
              <h3 className="font-bold leading-tight">SHIKSHA NIKETAN SCHOOL</h3>
              <p className="text-black-400 text-sm leading-tight">
                JAMMU, J&K <br />
                Completed my 10th grade with 86% 
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-black-400 text-sm leading-tight">2021-2022 | JKBOSE</h2>
              <h3 className="font-bold leading-tight">SHIKSHA NIKETAN SCHOOL</h3>
              <p className="text-black-400 text-sm leading-tight">
              JAMMU, J&K <br />
                Completed my 12th grade with 96% in the Science Stream.
              </p>
            </div>

            {/* Second Education */}
            <div className="space-y-1">
              <h2 className="text-black-400 text-sm leading-tight">2022-2026 | AKTU</h2>
              <h3 className="font-bold leading-tight">
                Galgotias College of Engineering and Technology
              </h3>
              <p className="text-black-400 text-sm leading-tight">
                Noida, Uttar Pradesh <br />
                Currently pursuing a Bachelor of Technology in Computer Science Engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div><hr/><b/> </>
  );
}

export default About;
