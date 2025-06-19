import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces") // Regex for letters and spaces
    .required("Name is required"),
  fatherName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed")
    .required("Father Name is required"),
  motherName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed")
    .required("Mother Name is required"),
  fatheremail: Yup.string()
    .email("Invalid email format") // Ensures it follows a standard email format
    .matches(/^[^@]+@[^@]+\.[^@]+$/, "Email must contain exactly one @") // Ensures only one @ is present
    .matches(
      /@[a-zA-Z0-9.-]+\.(in|com|edu|org)$/,
      "Email must end with .com, .edu, .in ,or .org"
    ) // Restricts domain extensions
    .required("Student Email is required"), // Ensures the field is mandatory
  // email: Yup.string().email('Invalid email address').required('Email is required'),
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[^@]+@[^@]+\.[^@]+$/,
      'Email must contain exactly one "@" symbol'
    )
    .matches(
      /@[a-zA-Z0-9.-]+\.(com|edu|org|in)$/,
      "Email must end with .com, .edu, or .org"
    )
    .required("Father Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone must be 10 digits")
    .required("Contact number is required"),
  otherPhone: Yup.string()
    .matches(/^\d{10}$/, "Other phone must be 10 digits")
    .required("Other contact number is required"),
  gender: Yup.string().required("Gender is required"),
  address: Yup.string().required("Address is required"),
  rollno: Yup.string().matches(
    /^[0-9]{6}$/,
    "Roll Number must be exactly 6 digits"
  ).required("rollno is required"),
  course: Yup.string().required("Course is required"),
  year: Yup.string().required("Year is required"),
  totalpresent: Yup.number()
    .typeError("Total Present days must be a number")
    .min(0, "Total Present days must be at least 0")
    .required("Total Present days is required"),
  totalabsent: Yup.number()
    .typeError("Total Absent days must be a number")
    .min(0, "Total Absent days must be at least 0")
    .required("Total Absent days is required"),
  totalday: Yup.number()
    .typeError("Total  days must be a number")
    .min(0, "Total days must be at least 0")
    .required("Total days is required"),
  attenpercentage: Yup.number()
    .typeError("Attendance Percentage must be a number")
    .min(0, "Attendance Percentage cannot be less than 0")
    .max(100, "Attendance Percentage cannot be more than 100")
    .required("Attendance Percentage is required"),
  oneA: Yup.string().required("1A Level is required"),
  oneB: Yup.string().required("1B Level is required"),
  oneC: Yup.string().required("1C Level is required"),
  twoA: Yup.string().required("2A Level is required"),
  twoB: Yup.string().required("2B Level is required"),
  twoC: Yup.string().required("2C Level is required"),
});

const AddStudent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { student } = location.state || {};

  const formik = useFormik({
    initialValues: {
      name: student?.name || "",
      fatherName: student?.fatherName || "",
      fatheremail: student?.fatheremail || "",
      motherName: student?.motherName || "",
      email: student?.email || "",
      phone: student?.phone || "",
      otherPhone: student?.otherPhone || "",
      gender: student?.gender || "",
      address: student?.address || "",
      rollno: student?.rollno || "",
      course: student?.course || "",
      year: student?.year || "",
      totalpresent: student?.totalpresent || "",
      totalabsent: student?.totalabsent || "",
      totalday: student?.totalday || "",
      attenpercentage: student?.attenpercentage || "",
      oneA: student?.oneA || "",
      oneB: student?.oneB || "",
      oneC: student?.oneC || "",
      twoA: student?.twoA || "",
      twoB: student?.twoB || "",
      twoC: student?.twoC || "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (student?.id) {
          await axios.put(
            `http://localhost:5000/api/data/${student.id}`,
            values
          );
        } else {
          await axios.post("http://localhost:5000/api/data", values);
        }
        resetForm();
        // alert("successfully student aadded");
        toast.success("Student Add successfully!", { position: "top-center" });

        // navigate('/login'); // Redirects back to the student table
      } catch (error) {
        alert("this emaili is not a valid email");
        console.error("Error submitting data", error);
        // Handle error if needed
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <div className="max-w-4xl mx-auto space-x-2  ">
      
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-xl rounded-lg px-5 pt-8 pb-8 mb-5 w-10/11 "
        >
            <h2 className="text-3xl font-bold mb-6 text-center  p-2 rounded text-gray-800 ">
          Add Student
          <div className="w-20 sm:w-28 h-1 mx-auto bg-blue-500 rounded-full mt-2"></div>

        </h2>
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            Student Information
            <svg
              className="h-6 w-6 text-black-500 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </h2>
          <div className="border-b-2 border-black w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="relative w-full">
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder=" " // Placeholder remains empty for the floating effect
                className={`peer w-full p-3 border ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
              />
              <label
                className={`absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Name <span className="text-red-500">*</span>
              </label>
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              )}
            </div>

            {/* Father Name Field */}
            <div className="relative w-full">
              <input
                type="text"
                name="fatherName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fatherName}
                placeholder=" " // Empty placeholder for floating effect
                className={`peer w-full p-3 border ${
                  formik.touched.fatherName && formik.errors.fatherName
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
              />
              <label
                className={`absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Father Name <span className="text-red-500">*</span>
              </label>
              {formik.touched.fatherName && formik.errors.fatherName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.fatherName}
                </div>
              )}
            </div>
             {/* Mother Name Field */}
             <div className="relative w-full">
              <input
                type="text"
                name="motherName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.motherName}
                placeholder=" " // Empty placeholder for floating effect
                className={`peer w-full p-3 border ${
                  formik.touched.motherName && formik.errors.motherName
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
              />
              <label
                className={`absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Mother Name <span className="text-red-500">*</span>
              </label>
              {formik.touched.motherName && formik.errors.motherName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.motherName}
                </div>
              )}
            </div>
            <div className="relative w-full">
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder=" " // Empty placeholder for floating effect
                className={`peer w-full p-3 border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
              />
              <label
                className={`absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Father Email <span className="text-red-500">*</span>
              </label>
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              )}
            </div>
           
            {/* Email Field */}
            <div className="relative w-full mt-2">
              <input
                type="email"
                name="fatheremail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fatheremail}
                placeholder=" " // Empty placeholder for floating effect
                className={`peer w-full p-3 border ${
                  formik.touched.fatheremail && formik.errors.fatheremail
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
              />
              <label
                className={`absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Student Email <span className="text-red-500">*</span>
              </label>
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Contact No. Field */}
            <div className="relative w-full mt-2">
              <input
                type="text"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder=" " // Empty placeholder for floating effect
                className={`peer w-full p-3 border ${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
              />
              <label
                className={`absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Contact No. <span className="text-red-500">*</span>
              </label>
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500 text-sm">
                  {formik.errors.phone}
                </div>
              )}
            </div>

            {/* Other Contact No. Field */}
            <div className="relative w-full mt-2">
              <input
                type="text"
                name="otherPhone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.otherPhone}
                placeholder=" " // Empty placeholder for floating effect
                className={`peer w-full p-3 border ${
                  formik.touched.otherPhone && formik.errors.otherPhone
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
              />
              <label
                className={`absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Other Contact No. <span className="text-red-500">*</span>
              </label>
              {formik.touched.otherPhone && formik.errors.otherPhone && (
                <div className="text-red-500 text-sm">
                  {formik.errors.otherPhone}
                </div>
              )}
            </div>

            {/* Gender Field */}
            <div className="relative w-full mt-2">
              <select
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
                className={`peer p-3 w-full rounded-md border ${
                  formik.touched.gender && formik.errors.gender
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
              >
                <option value="" disabled>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label
                className={`absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              ></label>
              {formik.touched.gender && formik.errors.gender && (
                <div className="text-red-500 text-sm">
                  {formik.errors.gender}
                </div>
              )}
            </div>

            {/* Address Field */}
            <div className="relative w-full mt-2">
  <input
    type="text"
    name="address"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.address}
    placeholder=" " // Empty placeholder for floating effect
    className={`peer w-full p-3 border ${
      formik.touched.address && formik.errors.address
        ? "border-red-500"
        : "border-gray-300"
    } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
  />
  <label
    className={`absolute left-3 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
  >
    Address <span className="text-red-500">*</span>
  </label>
  {formik.touched.address && formik.errors.address && (
    <div className="text-red-500 text-sm">{formik.errors.address}</div>
  )}
</div>


            {/* Roll No. Field */}
            <div className="relative w-full mt-2">
              <input
                type="text"
                name="rollno"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rollno}
                placeholder=" " // Empty placeholder for floating effect
                className={`peer w-full p-3 border ${
                  formik.touched.rollno && formik.errors.rollno
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
              />
              <label
                className={`absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Roll Number <span className="text-red-500">*</span>
              </label>
              {formik.touched.rollno && formik.errors.rollno && (
                <div className="text-red-500 text-sm">
                  {formik.errors.rollno}
                </div>
              )}
            </div>

            {/* Course Field */}
            <div className="relative mt-2">
              <select
                name="course"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.course}
                className={`peer p-3 w-full rounded-md border ${
                  formik.touched.course && formik.errors.course
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="" disabled>
                  {" "}
                  Course
                </option>
                <option value="BCA+ITEG">BCA + ITEG</option>
                <option value="BBA+ITEG">BBA + ITEG</option>
                <option value="DIPLOMA ITEG">Diploma ITEG</option>
                <option value="Bsc+ITEG">Bsc + ITEG</option>
              </select>
              <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"></label>
              {formik.touched.course && formik.errors.course && (
                <div className="text-red-500 text-sm">
                  {formik.errors.course}
                </div>
              )}
            </div>

            {/* Year Field */}
            <div className="relative w-full mt-2">
              <select
                name="year"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.year}
                className={`peer p-3 w-full rounded-md border ${
                  formik.touched.year && formik.errors.year
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
              >
                <option value="" disabled>
                  {" "}
                  Year{" "}
                </option>
                <option value="1 Year">1st Year</option>
                <option value="2 Year">2nd Year</option>
                <option value="3 Year">3rd Year</option>
                <option value="4 Year">4th Year</option>
              </select>
              <label
                className={`absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              ></label>
              {formik.touched.year && formik.errors.year && (
                <div className="text-red-500 text-sm">{formik.errors.year}</div>
              )}
            </div>

            {/* Total Days */}
            <div className="relative w-full mt-2">
              <input
                type="number"
                name="totalday"
                onChange={(e) => {
                  const value = Number(e.target.value);
                  formik.setFieldValue("totalday", value);

                  // Automatically calculate Total Absent and Attendance Percentage
                  if (formik.values.totalpresent) {
                    const totalAbsent = value - formik.values.totalpresent;
                    const percentage = (
                      (formik.values.totalpresent / value) *
                      100
                    ).toFixed(2);
                    formik.setFieldValue(
                      "totalabsent",
                      totalAbsent >= 0 ? totalAbsent : 0
                    );
                    formik.setFieldValue("attenpercentage", percentage);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.totalday}
                placeholder=" "
                className={`peer w-full p-3 border ${
                  formik.touched.totalday && formik.errors.totalday
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
              />
              <label
                className={`absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Total Days <span className="text-red-500">*</span>
              </label>
              {formik.touched.totalday && formik.errors.totalday && (
                <div className="text-red-500 text-sm">
                  {formik.errors.totalday}
                </div>
              )}
            </div>

            <div className="relative w-full mt-2">
              <input
                type="number"
                name="totalpresent"
                onChange={(e) => {
                  const value = Number(e.target.value);
                  formik.setFieldValue("totalpresent", value);

                  // Automatically calculate Total Absent and Attendance Percentage
                  if (formik.values.totalday) {
                    const totalAbsent = formik.values.totalday - value;
                    const percentage = (
                      (value / formik.values.totalday) *
                      100
                    ).toFixed(2);
                    formik.setFieldValue(
                      "totalabsent",
                      totalAbsent >= 0 ? totalAbsent : 0
                    );
                    formik.setFieldValue("attenpercentage", percentage);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.totalpresent}
                placeholder=" "
                className={`peer w-full p-3 border ${
                  formik.touched.totalpresent && formik.errors.totalpresent
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue bg-white`}
              />
              <label
                className={`absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Total Present <span className="text-red-500">*</span>
              </label>
              {formik.touched.totalpresent && formik.errors.totalpresent && (
                <div className="text-red-500 text-sm">
                  {formik.errors.totalpresent}
                </div>
              )}
            </div>

            {/* Total Absent */}
            <div className="relative w-full mt-2">
              <input
                type="number"
                name="totalabsent"
                readOnly
                value={formik.values.totalabsent}
                placeholder=" "
                className={`peer w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue ${
                  formik.touched.totalabsent && formik.errors.totalabsent
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <label
                className={`absolute left-3 text-black top-0 duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Total Absent <span className="text-red-500">*</span>
              </label>
              {formik.touched.totalabsent && formik.errors.totalabsent && (
                <div className="text-red-500 text-sm">
                  {formik.errors.totalabsent}
                </div>
              )}
            </div>

            {/* Attendance Percentage */}
            <div className="relative mt-2">
              <input
                type="number"
                name="attenpercentage"
                readOnly
                value={formik.values.attenpercentage}
                placeholder=" " // Empty placeholder for floating effect
                className={`peer w-full p-3 border ${
                  (formik.touched.attenpercentage || formik.submitCount > 0) &&
                  formik.errors.attenpercentage
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  bg-white`}
              />
              <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
                Attendance% <span className="text-red-500">*</span>
              </label>
              {formik.touched.attenpercentage &&
                formik.errors.attenpercentage && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.attenpercentage}
                  </div>
                )}
            </div>
            {/* 1A Level Field */}
            <div className="relative mt-2">
              <select
                name="oneA"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.oneA}
                className={`peer p-3 w-full   rounded-md border ${
                  formik.touched.oneA && formik.errors.oneA
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="" disabled>
                  {" "}
                  1A Level
                </option>
                <option value="Pending">Pending</option>
                <option value="Running">Running</option>
                <option value="Clear">Clear</option>
              </select>
              <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"></label>
              {formik.touched.oneA && formik.errors.oneA && (
                <div className="text-red-500 text-sm">{formik.errors.oneA}</div>
              )}
            </div>

            {/* 1B Level Field
          <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">1B Level
  <span className="text-red-500">*</span>
  </label>
  {formik.touched.oneA && formik.errors.oneA && (
    <div className="text-red-500 text-sm">{formik.errors.oneA}</div>
  )}
</div> */}
            {/* 1B Level Field */}
            <div className="relative mt-2">
              <select
                name="oneB"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.oneB}
                className={`peer p-3 w-full rounded-md border ${
                  formik.touched.oneB && formik.errors.oneB
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="" disabled>
                  1B Level
                </option>
                <option value="Pending">Pending</option>
                <option value="Running">Running</option>
                <option value="Clear">Clear</option>
              </select>
              <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"></label>
              {formik.touched.oneB && formik.errors.oneB && (
                <div className="text-red-500 text-sm">{formik.errors.oneB}</div>
              )}
            </div>

            {/* 1C Level Field */}
            <div className="relative mt-2">
              <select
                name="oneC"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.oneC}
                className={`peer p-3 w-full rounded-md border ${
                  formik.touched.oneC && formik.errors.oneC
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="" disabled>
                  {" "}
                  1C Level
                </option>
                <option value="Pending">Pending</option>
                <option value="Running">Running</option>
                <option value="Clear">Clear</option>
              </select>
              <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"></label>
              {formik.touched.oneC && formik.errors.oneC && (
                <div className="text-red-500 text-sm">{formik.errors.oneC}</div>
              )}
            </div>

            {/* 2A Level Field */}
            <div className="relative mt-2">
              <select
                name="twoA"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.twoA}
                className={`peer p-3 w-full rounded-md border ${
                  formik.touched.twoA && formik.errors.twoA
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="" disabled>
                  {" "}
                  2A Level{" "}
                </option>
                <option value="Pending">Pending</option>
                <option value="Running">Running</option>
                <option value="Clear">Clear</option>
              </select>
              <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"></label>
              {formik.touched.twoA && formik.errors.twoA && (
                <div className="text-red-500 text-sm">{formik.errors.twoA}</div>
              )}
            </div>

            {/* 2B Level Field */}
            <div className="relative mt-2">
              <select
                name="twoB"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.twoB}
                className={`peer p-3 w-full rounded-md border ${
                  formik.touched.twoB && formik.errors.twoB
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="" disabled>
                  {" "}
                  2B Level{" "}
                </option>
                <option value="Pending">Pending</option>
                <option value="Running">Running</option>
                <option value="Clear">Clear</option>
              </select>
              <label className="absolute left-3 top-0 text-black duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"></label>
              {formik.touched.twoB && formik.errors.twoB && (
                <div className="text-red-500 text-sm">{formik.errors.twoB}</div>
              )}
            </div>

            {/* 2C Level Field */}
            <div className="relative mt-2">
              <select
                name="twoC"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.twoC}
                className={`peer p-3 w-full rounded-md border ${
                  formik.touched.twoC && formik.errors.twoC
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="" disabled>
                  {" "}
                  2C Level
                </option>
                <option value="Pending">Pending</option>
                <option value="Running">Running</option>
                <option value="Clear">Clear</option>
              </select>
              <label className="absolute left-3 top-0  duration-300 transform -translate-y-4 scale-75 origin-[0] bg-white px-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"></label>
              {formik.touched.twoC && formik.errors.twoC && (
                <div className="text-red-500 text-sm">{formik.errors.twoC}</div>
              )}
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="submit"
              className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              onClick={() => navigate("/teacher-dashboard/home")}
              onClick={() => navigate("/superadmin-dashboard/dash")}


            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddStudent;