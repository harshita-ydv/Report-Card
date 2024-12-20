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
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import TeacherStatus from './components/TeacherStatus';
import UploadExcelForm from './components/UploadExcelForm';
import PasswordRecovery from './components/PasswordRecovery';
import AcceptRequest from './components/AcceptRequest';
import RejectRequest from './components/RejectRequest';

function App() {
  return (
    <>
    <Router>
      {/* <Navbar  /> */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password/:token" component={<ResetPassword/>} />
        <Route path="/password-recovery" element={<PasswordRecovery/>} />
        {/* Protected Route for Super Admin */}
        <Route
          path="/superadmin-dashboard/*"
          element={
            <ProtectedRoute role="SuperAdmin">
              <SuperadminDas />
  
              {/* <Route path="/teacher-status" element={<TeacherStatus/>} /> */}
            </ProtectedRoute>
          }
        />
          <Route path="pending-requests" element={<AcceptRequest/>} />
                <Route path="users" element={<RejectRequest/>} />
              {/* <Route path="/teacher-status" element={<TeacherStatus/>} /> */}

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
          <Route path="upload" element={<UploadExcelForm/>} />




        </Route>
    {/* <Route path="/upload" element={<UploadExcelForm/>} /> */}
        {/* Route for Editing Student */}
        <Route path="/edit-students" element={<EditStudentForm />} />
        {/* <Route path="/view-report/:id" element={<ViewReportCard/>} /> */}

        {/* Protected Route for Student */}
        {/* <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute role="Student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;





