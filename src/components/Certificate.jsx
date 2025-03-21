export default function Project() {
 return ( <>
   <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center dark:bg-gray-900">
     {/* Heading */}
     <h1 className="text-3xl font-bold text-center mb-4 dark:text-white text-gray-900">
       Certificate
     </h1>

     {/* Horizontal Line */}
     <hr className="w-32 border-t-2 border-gray-300 dark:border-gray-600 mb-6 h-9" />

     {/* Projects Container */}
     <div className="flex flex-wrap gap-6 justify-center">
       
       {/* Project 1 */}
       <div className="w-auto max-w-md p-6 bg-gray-800 rounded-lg shadow-lg dark:bg-gray-700">
         
         <h2 className=" text-xl font-semibold">Simpli learn</h2>
         <p className="mt-2 text-gray-300 dark:text-gray-400">
           In this we understand the some concept of the Mongodb such as the Sort() , Limit() , Indexing etc .
         </p>
         <a 
              href="/Simplilearn Certificate.pdf" 
              download="certificate.pdf"
              className="inline-block  mt-9 px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white font-bold text-sm rounded-lg hover:bg-blue-500 dark:hover:bg-blue-400 transition duration-300"
            >
              📄 Download Certificate
            </a>
       </div>

       {/* Project 2 */}
       <div className="w-auto max-w-md p-6 bg-gray-800 rounded-lg shadow-lg dark:bg-gray-700">
         
         <h2 className=" text-xl font-semibold">Oracle</h2>
         <p className="mt-2 text-gray-300 dark:text-gray-400">
           In this we understand the some concept of the SQL such as the DDL commands , DQL commands ,DML commands etc .
         </p>
         <a 
              href="/oracle.pdf" 
              download="certificate.pdf"
              className="inline-block  mt-9 px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white font-bold text-sm rounded-lg hover:bg-blue-500 dark:hover:bg-blue-400 transition duration-300"
            >
              📄 Download Certificate
            </a>
       </div>
       {/* Project 3 */}
       <div className="w-auto max-w-md p-6 bg-gray-800 rounded-lg shadow-lg dark:bg-gray-700">
         
         <h2 className=" text-xl font-semibold">Infosys</h2>
         <p className="mt-2 text-gray-300 dark:text-gray-400">
           In this we understand the some concept of the SQL such as the DDL commands , DQL commands ,DML commands etc .
         </p>
         <a 
              href="/Adhikansh infosys.pdf" 
              download="certificate.pdf"
              className="inline-block  mt-9 px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white font-bold text-sm rounded-lg hover:bg-blue-500 dark:hover:bg-blue-400 transition duration-300"
            >
              📄 Download Certificate
            </a>
       </div>
       {/* Project 4 */}
       <div className="w-auto max-w-md p-6 bg-gray-800 rounded-lg shadow-lg dark:bg-gray-700">
         
         <h2 className=" text-xl font-semibold">Infosys</h2>
         <p className="mt-2 text-gray-300 dark:text-gray-400">
           In this we understand the some concept of the Dsa in Python .
         </p>
         <a 
              href="/oracle.pdf" 
              download="certificate.pdf"
              className="inline-block  mt-9 px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white font-bold text-sm rounded-lg hover:bg-blue-500 dark:hover:bg-blue-400 transition duration-300"
            >
              📄 Download Certificate
            </a>
       </div>
       {/* Project  */}
       <div className="w-auto max-w-md p-6 bg-gray-800 rounded-lg shadow-lg dark:bg-gray-700">
         
         <h2 className=" text-xl font-semibold">IBM</h2>
         <p className="mt-2 text-gray-300 dark:text-gray-400">
           In this we understand the some concept of the Development .
         </p>
         <a 
              href="/IBM.pdf" 
              download="certificate.pdf"
              className="inline-block  mt-9 px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white font-bold text-sm rounded-lg hover:bg-blue-500 dark:hover:bg-blue-400 transition duration-300"
            >
              📄 Download Certificate
            </a>
       </div>
       

     </div>
   </div> <hr/></>
 );
}
