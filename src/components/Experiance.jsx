import React from "react";

function Experience() {
  const cardItem = [
    { id: 1, logo: "/mongodb.jpg", name: "MongoDB" },
    { id: 2, logo: "/css.jpg", name: "CSS" },
    { id: 3, logo: "/java.png", name: "Java" },
    { id: 4, logo: "/javascript.png", name: "JavaScript" },
    { id: 5, logo: "/oracle.png", name: "Oracle" },
    { id: 6, logo: "/node.png", name: "Node Js" },
    { id: 7, logo: "/springBoot.jpg", name: "Spring Boot" },
    { id: 8, logo: "/reactjs.png", name: "React.js" },
    { id: 9, logo: "/tailwind.png", name: "Tailwind CSS" },
    { id: 10, logo: "/github.png", name: "GitHub" },
    { id: 11, logo: "/html.png", name: "HTML" },
  ];

  return (<>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-5">Essential Tools I Use</h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-7 my-3 justify-items-center">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center border-2 rounded-full w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] shadow-md p-2 cursor-pointer hover:scale-110 duration-300 bg-gray-800"
          >
            <img
              src={logo}
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full object-contain"
              alt={name}
            />
            <p className="text-center mt-2 text-white text-sm sm:text-base">{name}</p>
          </div>
        ))}
      </div>
    </div><br/><hr/><b/></>
  );
}

export default Experience;
