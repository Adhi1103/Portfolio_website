export default function Projects() {
  return ( <>
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center dark:bg-gray-900">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-4 dark:text-white text-gray-900">
        Projects
      </h1>

      {/* Horizontal Line */}
      <hr className="w-32 border-t-2 border-gray-300 dark:border-gray-600 mb-6" />

      {/* Projects Container */}
      <div className="flex flex-wrap gap-6 justify-center">
        
        {/* Project 1 */}
        <div className="w-auto max-w-md p-6 bg-gray-800 rounded-lg shadow-lg dark:bg-gray-700">
          <img 
            src="image1.png" 
            alt="Portfolio" 
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold">Portfolio</h2>
          <p className="mt-2 text-gray-300 dark:text-gray-300">
            This portfolio website showcases my web development skills using React, Tailwind, and animations.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-500">⚛️</span>
            <span className="text-black bg-yellow-400 px-2 py-1 rounded text-sm">JS</span>
          </div>
          <a 
            href="https://portfolio-website-seven-omega-98.vercel.app/" 
            target="_blank" 
            className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-all"
          >
            Live 🔗
          </a>
        </div>

        {/* Project 2 */}
        <div className="w-auto max-w-md p-6 bg-gray-800 rounded-lg shadow-lg dark:bg-gray-700">
          <img 
            src="image.png" 
            alt="Blog WebApp" 
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold">Chat With Me</h2>
          <p className="mt-2 text-gray-300 dark:text-gray-400">
            Designed and developed a secure real-time messaging application with advanced privacy and security features.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-500">⚛️</span>
            <span className="text-black bg-yellow-400 px-2 py-1 rounded text-sm">JS</span>
          </div>
          <a 
            href="https://chat-application-k64c.vercel.app/" 
            target="_blank" 
            className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-all"
          >
            Live 🔗
          </a>
        </div>

        {/* Project 3 */}
        <div className="w-auto max-w-md p-6 bg-gray-800 rounded-lg shadow-lg dark:bg-gray-700">
          <img 
            src="project.png" 
            alt="Travel and Tour WebApp" 
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold">Tour and travel </h2>
          <p className="mt-2 text-gray-300 dark:text-gray-400">
           The Tour Booking Web App is a full-featured travel and tourism platform that allows users to explore, search, and book their favorite travel destinations..
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-500">⚛️</span>
            <span className="text-black bg-yellow-400 px-2 py-1 rounded text-sm">JS</span>
          </div>
          
        </div>

        <div className="w-auto max-w-md p-6 bg-gray-800 rounded-lg shadow-lg dark:bg-gray-700">
          <img 
            src="1.png.png" 
            alt="MediConnect" 
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold">MediConnect</h2>
          <p className="mt-2 text-gray-300 dark:text-gray-400">
            MediConnect successfully delivers a unified, secure platform that streamlines healthcare management through a verified doctor network and AI-powered symptom triage. It effectively reduces administrative burdens, enhances patient-doctor connectivity, and provides a scalable foundation for the future of digital healthcare services.


          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-500">⚛️</span>
            <span className="text-black bg-yellow-400 px-2 py-1 rounded text-sm">JS</span>
          </div>
          <a 
            href="https://mediconnect-uhxz-8cwlclt2t-adhikansh1103s-projects.vercel.app/" 
            target="_blank" 
            className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-all"
          >
            Live 🔗
          </a>
        </div>

      </div>
    </div> <hr/></>
  );
}
