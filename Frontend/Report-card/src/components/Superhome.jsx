// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaFileAlt, FaBell,  } from "react-icons/fa";
// import { MdOutlinePendingActions } from "react-icons/md";
// import { BsCheckLg } from "react-icons/bs";
// import { RxCross2 } from "react-icons/rx";
// const Superhome = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="container mx-auto my-4 p-4">
//       <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-6">
//         Dashboard Overview
//       </h2>
//       <p className="text-lg text-center text-gray-700 mb-8">
//         Access key functionalities and manage your tasks efficiently.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {/* Card 1: View Reports */}
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
//           <div className="flex justify-center mb-4">
//             <MdOutlinePendingActions className="text-blue-900 text-5xl" />
//           </div>
//           <h5 className="text-xl font-semibold mb-2 text-blue-900">
//           Pending Requests   
//           </h5>
//           <p className="text-gray-600 text-sm mb-4">
//             Access detailed reports and analyze effectively.
//           </p>
//           <button
//             onClick={() => navigate("/superadmin-dashboard/pending-requests")}
//             className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition w-full max-w-[150px] mx-auto text-sm"
//           >
//             View Reports
//           </button>
//         </div>

//         {/* Card 2: Notifications */}
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
//           <div className="flex justify-center mb-4">
//             <BsCheckLg className="text-blue-900 text-5xl" />
//           </div>
//           <h5 className="text-xl font-semibold mb-2 text-blue-900">
//             Accepted Requets
//        </h5>
//           <p className="text-gray-600 text-sm mb-4">
//             Stay updated with the latest alerts and updates.
//           </p>
//           <button
//             onClick={() => navigate("/superadmin-dashboard/accept-requests")}
//             className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition w-full max-w-[150px] mx-auto text-sm"
//           >
//             View Alerts
//           </button>
//         </div>

//         <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
//           <div className="flex justify-center mb-4">
//             <RxCross2 className="text-blue-900 text-5xl" />
//           </div>
//           <h5 className="text-xl font-semibold mb-2 text-blue-900">
//             Rejected Requets
//        </h5>
//           <p className="text-gray-600 text-sm mb-4">
//             Stay updated with the latest alerts and updates.
//           </p>
//           <button
//             onClick={() => navigate("/superadmin-dashboard/users")}
//             className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition w-full max-w-[150px] mx-auto text-sm"
//           >
//             View Alerts
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Superhome;







import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlinePendingActions } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const Superhome = () => {
  const navigate = useNavigate();
  const [pendingRequestCount, setPendingRequestCount] = useState(0);

  // Function to fetch the pending request count
  const fetchPendingRequestCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/superadmin/pending-request-count"
      );
      setPendingRequestCount(response.data.count);
    } catch (error) {
      console.error("Error fetching pending request count:", error);
    }
  };

  // UseEffect to fetch the count on component mount
  useEffect(() => {
    fetchPendingRequestCount();
  }, []);

  // Callback to refresh the count after accepting/rejecting requests
  const handleRequestAction = async () => {
    await fetchPendingRequestCount();
  };

  return (
    <div className="container mx-auto my-4 p-4">
      <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-6">
        Superadmin Home
      </h2>
     

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Card 1: Pending Requests */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <MdOutlinePendingActions className="text-blue-900 text-5xl" />
          </div>
          <h5 className="text-xl font-semibold mb-2 text-blue-900">
            Pending Requests ({pendingRequestCount})
          </h5>
          <p className="text-gray-600 text-sm mb-4">
            View and manage all pending requests.
          </p>
          <button
            onClick={() => {
              navigate("/superadmin-dashboard/pending-requests");
              handleRequestAction();
            }}
            className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition w-full max-w-[150px] mx-auto text-sm"
          >
            View Reports
          </button>
        </div>

        {/* Card 2: Accepted Requests */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <BsCheckLg className="text-blue-900 text-5xl" />
          </div>
          <h5 className="text-xl font-semibold mb-2 text-blue-900">
            Accepted Requests
          </h5>
          <p className="text-gray-600 text-sm mb-4">
            Accepted Teacher's Requests.
          </p>
          <button
            onClick={() => {
              navigate("/superadmin-dashboard/accept-requests");
              handleRequestAction();
            }}
            className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition w-full max-w-[150px] mx-auto text-sm"
          >
            View Alerts
          </button>
        </div>

        {/* Card 3: Rejected Requests */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <RxCross2 className="text-blue-900 text-5xl" />
          </div>
          <h5 className="text-xl font-semibold mb-2 text-blue-900">
            Rejected Requests
          </h5>
          <p className="text-gray-600 text-sm mb-4">
            Rejected Teacher's Requests.
          </p>
          <button
            onClick={() => {
              navigate("/superadmin-dashboard/users");
              handleRequestAction();
            }}
            className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition w-full max-w-[150px] mx-auto text-sm"
          >
            View Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Superhome;
