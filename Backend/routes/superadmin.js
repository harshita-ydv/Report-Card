// routes/superadmin.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const nodemailer = require('nodemailer');

// Route to get all pending teacher requests (for Super Admin)
router.get('/pending-teacher-requests', async (req, res) => {
  try {
    const pendingTeachers = await User.find({ status: 'Pending' , role: 'Teacher'});
    console.log(pendingTeachers); // Log the result
    res.status(200).json(pendingTeachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching teacher requests' });
  }
});

// // Route to approve a teacher's request
// router.put('/approve/:id', async (req, res) => {
//   try {
//     // Find teacher by ID
//     const teacher = await User.findById(req.params.id);
//     if (!teacher || teacher.role !== 'Teacher') {
//       return res.status(404).json({ message: 'Teacher not found' });
//     }

//     // Update teacher status to 'accepted'
//     teacher.status = 'accepted';
//     await teacher.save();

//     res.json({ message: 'Teacher approved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Route to reject a teacher's request
// router.put('/reject/:id', async (req, res) => {
//   try {
//     // Find teacher by ID
//     const teacher = await User.findById(req.params.id);
//     if (!teacher || teacher.role !== 'Teacher') {
//       return res.status(404).json({ message: 'Teacher not found' });
//     }

//     // Update teacher status to 'rejected'
//     teacher.status = 'rejected';
//     await teacher.save();

//     res.json({ message: 'Teacher rejected successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Or your email provider
  auth: {
    user: 'vishwakarmadivya133@gmail.com', // Replace with your email
    pass: 'jlxi fdms ajoo qyuf', // Replace with your email password or app password
  },
});

// Route to approve a teacher's request
router.put('/approve/:id', async (req, res) => {
  try {
    const teacher = await User.findById(req.params.id);
    if (!teacher ||  teacher.role !== 'Teacher') {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    teacher.status = 'accepted';
    await teacher.save();

    // Send approval email
    await transporter.sendMail({
      from: 'vishwakarmadivya133@gmail.com',
      to: teacher.email,
      subject: 'Request Approved',
      text: `Hello ${teacher.name},\n\nYour request has been approved. You can now log in using the following link:\n\nhttp://localhost:3000/login\n\nThank you!`,
    });

    res.json({ message: 'Teacher approved and email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to reject a teacher's request
router.put('/reject/:id', async (req, res) => {
  try {
    const teacher = await User.findById(req.params.id);
    if (!teacher ||  teacher.role !== 'Teacher') {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    teacher.status = 'rejected';
    await teacher.save();

    // Send rejection email
    await transporter.sendMail({
      from: 'vishwakarmadivya133@gmail.com',
      to: teacher.email,
      subject: 'Request Rejected',
      text: `Hello ${teacher.name},\n\nUnfortunately, your request has been rejected. For further details, please contact the admin.\n\nThank you!`,
    });

    res.json({ message: 'Teacher rejected and email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Route to fetch approved teachers
router.get('/approved-teachers', async (req, res) => {
  try {
    const approvedTeachers = await User.find({ status: 'accepted' , role: 'Teacher'});
    res.status(200).json(approvedTeachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching approved teachers' });
  }
});

// Route to fetch rejected teachers
router.get('/rejected-teachers', async (req, res) => {
  try {
    const rejectedTeachers = await User.find({ status: 'rejected', role: 'Teacher' });
    res.status(200).json(rejectedTeachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching rejected teachers' });
  }
});




module.exports = router;
