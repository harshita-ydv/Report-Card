// routes/superadmin.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config();

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
    user: process.env.EMAIL_USER, // Replace with your email
    pass: process.env.EMAIL_PASS,
 // Replace with your email password or app password
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
      from:process.env.EMAIL_USER,
      to: teacher.email,
      subject: 'Your Request Has Been Approved',
      text: `Dear Teacher, ${teacher.name},\n\n 

      We are pleased to inform you that your registration request has been approved.
      You can now log in to the platform using your credentials and start accessing 
      the features available to you..

      If you encounter any issues while logging in or navigating the platform, please
      do not hesitate to contact us at.

      Thank you for your patience during the approval process, and we look forward to
      your active participation.

      Best regards,
      SSISM 
      Contact No.:-9876543231 `,
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
      from: process.env.EMAIL_USER,
      to: teacher.email,
      subject: 'Your Request Has Been Rejected',
      text: `Dear Teacher ${teacher.name},\n\n

      We regret to inform you that your registration request has been 
      reviewed but could not be approved at this time.
      
      If you believe this decision was made in error or if you would like
      to discuss the matter further, please feel free to contact us at 
      [support email or contact information]. We will be happy to assist 
      you and provide clarification. 
      
      We appreciate your interest and understanding. 
      
      Best regards,
      SSISM 
      Contact No.:-9876543231 `,
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
// Delete a rejected teacher
router.delete('/rejected-teachers/:id', async (req, res) => {
  try {
    const teacher = await User.findById(req.params.id);

    if (!teacher || teacher.role !== 'Teacher' || teacher.status !== 'rejected') {
      return res.status(404).json({ message: 'Rejected teacher not found' });
    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Rejected teacher removed successfully' });
  } catch (error) {
    console.error('Error removing rejected teacher:', error);
    res.status(500).json({ message: 'Error removing rejected teacher' });
  }
});


// Delete an approved teacher
router.delete('/approved-teachers/:id', async (req, res) => {
  try {
    const teacher = await User.findById(req.params.id);

    if (!teacher || teacher.role !== 'Teacher' || teacher.status !== 'accepted') {
      return res.status(404).json({ message: 'Approved teacher not found' });
    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Approved teacher removed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error removing approved teacher' });
  }
});


router.get('/pending-request-count', async (req, res) => {
  try {
    const count = await User.countDocuments({ status: 'Pending' });
    res.json({ count });
  } catch (error) {
    console.error('Error fetching pending request count:', error);
    res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;


