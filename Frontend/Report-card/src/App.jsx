import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Navbar = React.lazy(() => import("./components/Navbar"));
const Login = React.lazy(() => import("./components/Login"));
const Register = React.lazy(() => import("./components/Register"));
const TeacherDashboard = React.lazy(() =>
  import("./components/TeacherDashboard")
);
const StudentDashboard = React.lazy(() =>
  import("./components/StudentDashboard")
);
("");
const ProtectedRoute = React.lazy(() => import("./components/ProtectedRoute"));
("");
const SuperadminDas = React.lazy(() => import("./components/SuperadminDas"));
const AddStudent = React.lazy(() => import("./components/AddStudent"));
const TeacherHome = React.lazy(() => import("./components/TeacherHome"));
const StudentTable = React.lazy(() => import("./components/StudentTable"));
const EditStudentForm = React.lazy(() =>
  import("./components/EditStudentForm")
);
const LandingPage = React.lazy(() => import("./LandingPage/LandingPage"));
const Footer = React.lazy(() => import("./LandingPage/Footer"));
const GenReportCard = React.lazy(() =>
  import("./components/GenrateReportCard")
);
const ViewReportCard = React.lazy(() => import("./components/ViewReportCard"));
const ForgotPassword = React.lazy(() => import("./components/ForgotPassword"));
const ResetPassword = React.lazy(() => import("./components/ResetPassword"));
const TeacherStatus = React.lazy(() => import("./components/TeacherStatus"));
const UploadExcelForm = React.lazy(() =>
  import("./components/UploadExcelForm")
);
const PasswordRecovery = React.lazy(() =>
  import("./components/PasswordRecovery")
);
const AcceptRequest = React.lazy(() => import("./components/AcceptRequest"));
const RejectRequest = React.lazy(() => import("./components/RejectRequest"));
const Profile = React.lazy(() => import("./components/ProfileModel"));
const Superhome = React.lazy(() => import("./components/Superhome"));
const PendingRequest = React.lazy(() => import("./components/PendingRequest"));
import HashLoader from 'react-spinners/HashLoader'
import History from "./components/History";

function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <HashLoader
                color="#1e3a8a"
                loading
                size={70}
                speedMultiplier={1}
              />
            </div>
          }
        >
          {/* <Navbar  /> */}
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/reset-password/:token"
              component={<ResetPassword />}
            /> */}
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            {/* Protected Route for Super Admin */}
            <Route
              path="/superadmin-dashboard/*"
              element={
                <ProtectedRoute role="SuperAdmin">
                  <SuperadminDas />

                  {/* <Route path="/teacher-status" element={<TeacherStatus/>} /> */}
                </ProtectedRoute>
              }
            >
              <Route index element={<Superhome />} />
              <Route path="pending-requests" element={<PendingRequest />} />

              <Route path="accept-requests" element={<AcceptRequest />} />
              <Route path="users" element={<RejectRequest />} />
              {/* <Route path="/teacher-status" element={<TeacherStatus/>} /> */}
            </Route>
            {/* Protected Route for Teacher */}
            <Route
              path="/teacher-dashboard/*"
              element={
                <ProtectedRoute role="Teacher">
                  <TeacherDashboard />
                </ProtectedRoute>
              }
            >
                            <Route index element={<StudentDashboard/>} />

              <Route path="home" element={<TeacherHome />} />
              <Route path="add-student" element={<AddStudent />} />
              <Route path="manage-students" element={<StudentTable />} />

              <Route path="view-students" element={<GenReportCard />} />
              <Route path="upload" element={<UploadExcelForm />} />
              <Route path="history" element={<History/>} />

              
            </Route>
            {/* <Route path="/upload" element={<UploadExcelForm/>} /> */}
            {/* Route for Editing Student */}
            <Route path="/edit-students" element={<EditStudentForm />} />
            {/* <Route path="/profile" element={<Profile/>} /> */}

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
          {/* <Footer /> */}
        </Suspense>
      </Router>
    </>
  );
}

export default App;





