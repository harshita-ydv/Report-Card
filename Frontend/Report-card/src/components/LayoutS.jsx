import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarS from './SidebarS';
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
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar toggleSidebar={toggleSidebar} />
      </header>

      <div className="flex flex-1 pt-[64px]">
        {/* Sidebar */}
        <aside
          className={`fixed top-[64px] left-0 z-40 h-[calc(100vh-64px)] bg-white shadow-lg transition-transform transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:w-[250px]`}
        >
          <SidebarS isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:ml-[250px]">
          <main className="flex-1 bg-gray-50 overflow-auto p-6">
            <Outlet />
          </main>

          {/* Footer */}
          <footer>
            <Footer />
          </footer>
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
