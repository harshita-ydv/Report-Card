// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "../LandingPage/Footer";
// import Sidebar from "./Sidebar";

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Navbar */}
//       <header className="z-50 fixed top-0 w-full">
//         <Navbar toggleSidebar={toggleSidebar} />
//       </header>

//       <div className="flex flex-1 pt-16">
//         {/* Sidebar */}
//         <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-blue-100 shadow-lg">
//           <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 ml-64 overflow-y-auto">
//           <div className="p-6 max-w-4xl mx-auto">
//             <Outlet /> {/* Renders the child routes */}
//           </div>
//           <Footer />
//         </main>
        
//       </div>

//       {/* Footer */}
   
//     </div>
//   );
// };

// export default Layout;

// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "../LandingPage/Footer";
// import Sidebar from "./Sidebar";

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Navbar */}
//       <header className="z-50 fixed top-0 w-full">
//         <Navbar toggleSidebar={toggleSidebar} />
//       </header>

//       <div className="flex flex-1 pt-16">
//         {/* Sidebar for large screens */}
//         <aside
//           className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-blue-100 shadow-lg transition-transform duration-300 ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } lg:block`}
//         >
//           <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         </aside>

//         {/* Sidebar for small/medium screens (toggle button works here) */}
//         <div className="md:hidden fixed top-16 left-0 z-50">
//           <button
//             className="p-4 bg-blue-100 shadow-lg"
//             onClick={toggleSidebar}
//           >
//             {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
//           </button>
//         </div>

//         {/* Main Content */}
//         <main
//           className={`flex-1 ${
//             isSidebarOpen ? "ml-64" : ""
//           } lg:ml-0 overflow-y-auto bg-[#fcfcfc] transition-all duration-300`}
//         >
//           <div className="p-6 max-w-4xl mx-auto">
//             <Outlet /> {/* Renders the child routes */}
//           </div>
//           <Footer />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;

// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "../LandingPage/Footer";
// import Sidebar from "./Sidebar";

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Navbar */}
//       <header className="z-50 fixed top-0 w-full">
//         <Navbar toggleSidebar={toggleSidebar} />
//       </header>

//       <div className="flex flex-1 pt-16 z-60">
//         {/* Sidebar */}
//         <aside
//           className={`mt-1 fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-blue-100 shadow-lg transition-transform duration-300 lg:static lg:w-64 lg:block z-50 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
//         >
//           <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         </aside>

//         {/* Main Content */}
//         <main
//           className={`flex-1 ${isSidebarOpen ? "lg:ml-64" : ""} overflow-y-auto bg-[#fcfcfc] transition-all duration-300`}
//         >
//           <div className="p-6 max-w-4xl mx-auto">
//             <Outlet /> {/* Renders the child routes */}
//           </div>
//           <Footer />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;


import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from '../LandingPage/Footer';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex flex-1 pt-[64px]">
        {/* Sidebar */}
        <div
          className={`fixed top-[64px] left-0 z-40 h-[calc(100vh-64px)] bg-white shadow-md transition-transform transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:w-[250px]`}
        >
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:ml-[250px] mt-4">
          <main className="flex-1 bg-[#fcfcfc] overflow-auto p-6">
            {/* Render child routes */}
            <Outlet />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* Overlay for Sidebar on Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Layout;
