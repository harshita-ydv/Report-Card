import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import SuperadminDas from './components/SuperadminDas';
import AddStudent from './components/AddStudent';
import TeacherHome from './components/TeacherHome';
import StudentTable from './components/StudentTable';
import EditStudentForm from './components/EditStudentForm';
import LandingPage from './LandingPage/LandingPage';
import Footer from './LandingPage/Footer';
import GenReportCard from './components/GenrateReportCard';
import ViewReportCard from './components/ViewReportCard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route for Super Admin */}
        <Route
          path="/superadmin-dashboard"
          element={
            <ProtectedRoute role="SuperAdmin">
              <SuperadminDas />
            </ProtectedRoute>
          }
        />

        {/* Protected Route for Teacher */}
        <Route
          path="/teacher-dashboard/*"
          element={
            <ProtectedRoute role="Teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<TeacherHome />} />
          <Route path="add-student" element={<AddStudent />} />
          <Route path="manage-students" element={<StudentTable />} />
          
          <Route path="view-students" element={<GenReportCard/>} />




        </Route>

        {/* Route for Editing Student */}
        <Route path="/edit-students" element={<EditStudentForm />} />
        {/* <Route path="/view-report/:id" element={<ViewReportCard/>} /> */}

        {/* Protected Route for Student */}
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute role="Student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Register from './components/Register';
// import TeacherDashboard from './components/TeacherDashboard';
// import StudentDashboard from './components/StudentDashboard';
// import ProtectedRoute from './components/ProtectedRoute';
// import SuperadminDas from './components/SuperadminDas';
// import AddStudent from './components/AddStudent';
// import TeacherHome from './components/TeacherHome';
// import StudentTable from './components/StudentTable';
// import EditStudentForm from './components/EditStudentForm';
// import LandingPage from './LandingPage/LandingPage';
// import Footer from './LandingPage/Footer';
// import GenReportCard from './components/GenrateReportCard';
// import PreviewStudentDetails from './components/PreviewStudentDetails'; // Import the component

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Route for Super Admin */}
//         <Route
//           path="/superadmin-dashboard"
//           element={
//             <ProtectedRoute role="SuperAdmin">
//               <SuperadminDas />
//             </ProtectedRoute>
//           }
//         />

//         {/* Protected Route for Teacher */}
//         <Route
//           path="/teacher-dashboard/*"
//           element={
//             <ProtectedRoute role="Teacher">
//               <TeacherDashboard />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<TeacherHome />} />
//           <Route path="add-student" element={<AddStudent />} />
//           <Route path="manage-students" element={<StudentTable />} />
//           <Route path="view-students" element={<GenReportCard />} />
//         </Route>

//         {/* Route for Editing Student */}
//         <Route path="/edit-student" element={<EditStudentForm />} />

//         {/* Route for Previewing Student */}
//         <Route path="/preview-student" element={<PreviewStudentDetails />} />

//         {/* Protected Route for Student */}
//         <Route
//           path="/student-dashboard"
//           element={
//             <ProtectedRoute role="Student">
//               <StudentDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
