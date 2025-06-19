// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// const router = express.Router();

// const JWT_SECRET = process.env.JWT_SECRET;

// // Register route
// router.post('/register', async (req, res) => {
//   const { name, email, password, role } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 8);
//     const user = new User({ name, email, password: hashedPassword, role });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(400).json({ message: 'Error in registering user' });
//   }
// });

// // Login route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     if (user.status !== 'accepted') {
//       return res.status(403).json({ message: `Your account is ${user.status}` });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, role: user.role });
//   } catch (error) {
//     res.status(500).json({ message: 'Error in login' });
//   }
// });




// module.exports = router;


const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const nodemailer = require('nodemailer');  // Import Nodemailer
const dotenv = require("dotenv");
dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Passport.js Login route
router.post(
  "/login/passport",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// JWT-based Register route
// router.post("/register", async (req, res) => {
//   const { name, email, password, role } = req.body;

//   try {
//     // Check if the email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email is already registered" });
//     }

//     // Hash the password before storing it
//     const hashedPassword = await bcrypt.hash(password, 8);

//     // Create a new user with the hashed password
//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//     });

//     // Save the new user to the database
//     await user.save();

//     // Return success message
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error in registering user" });
//   }
// });

// JWT-based Login route



router.post("/register", async (req, res) => {
  const { name, email, password ,role} = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 8);

    // Create a new user with the hashed password
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    // Save the new user to the database
    await user.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // or any other email service like SendGrid, etc.
      auth: {
        user: process.env.EMAIL_USER,// Your email
        pass: process.env.EMAIL_PASS,
 // Your email password (you may want to use environment variables)
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,  // Sender email
      to: email,  // Recipient email
      subject: 'Registration Successful',
      text: `Dear ${name},\n\nYou have successfully registered. Please wait, your request will be reviewed within the next 2 hours.\n\nThank you!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Error sending confirmation email" });
      }
      console.log('Email sent: ' + info.response);
    });

    // Return success message
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in registering user" });
  }
});





// main
router.post("/login/jwt", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.status !== "accepted") {
      return res.status(403).json({ message: `Your account is ${user.status}` });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id ,role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, role: user.role  });
  } catch (error) {
    res.status(500).json({ message: "Error in login" });
  }
});






// router.post("/login/jwt", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Assign a default role of 'Teacher' if not set
//     if (!user.role) {
//       user.role = "Teacher";
//       await user.save(); // Save the updated role in the database
//     }

//     if (user.status !== "accepted") {
//       return res.status(403).json({ message: `Your account is ${user.status}` });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
//     res.json({ token, role: user.role });
//   } catch (error) {
//     res.status(500).json({ message: "Error in login" });
//   }
// });

let verificationCodes = {}; // Temporary store for verification codes (use Redis/DB for production)

// Send Verification Code



function generateRandomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    console.log("Request received with email:", email);

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const verificationCode = generateRandomCode();
    console.log('Generated verification code:', verificationCode);

    verificationCodes[email] = verificationCode;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    console.log('Sending email with Nodemailer');
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Verification Code",
      text: `Your verification code is ${verificationCode}`,
    });

    res.status(200).json({ message: "Verification code sent" });
  } catch (error) {
    console.error('Error in /forgot-password:', error);
    res.status(500).json({ message: "Server error", error: error.message || error });
  }
});




// Verify Code
router.post("/verify-code", (req, res) => {
  const { email, code } = req.body;

  if (verificationCodes[email] === code) {
    return res.status(200).json({ message: "Code verified" });
  } else {
    return res.status(400).json({ message: "Invalid code" });
  }
});

// Reset Password
router.post("/reset-password", async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.updateOne({ email }, { password: hashedPassword });

    delete verificationCodes[email]; // Remove the code after reset
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});
// Passport.js Logout route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

module.exports = router;
