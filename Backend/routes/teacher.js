// const express = require('express');
// const user = require('../models/user');
// const router = express.Router();
// // const User = require('../models/User');

// // Route to get all pending student requests for the teacher
// router.get('/pending-student-requests', async (req, res) => {
//   try {
//     const pendingStudents = await user.find({ status: 'Pending', role: 'Student' });
//     res.status(200).json(pendingStudents);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// // Route to approve or reject student requests
// router.put('/update-student-status/:id', async (req, res) => {
//   const { status } = req.body;

//   try {
//     const student = await user.findById(req.params.id);
//     if (!student || student.role !== 'Student') {
//       return res.status(404).json({ msg: 'Student not found' });
//     }

//     student.status = status;
//     await student.save();

//     res.json({ msg: 'Student status updated successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// module.exports = router;



const express = require('express');
const Teacher = require('../models/Teachers');
const User = require('../models/User');
const router = express.Router();

// ============================
// Teacher Routes
// ============================

// Get all pending teacher requests
router.get('/pending-teacher-requests', async (req, res) => {
  try {
    const pendingTeachers = await Teacher.find({ status: 'Pending' });
    res.json(pendingTeachers);
  } catch (error) {
    console.error('Error fetching teacher requests', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Approve a teacher request
router.put('/approve-teacher/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher.findById(id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    teacher.status = 'Accepted';
    await teacher.save();
    res.json({ message: 'Teacher approved successfully', teacher });
  } catch (error) {
    console.error('Error approving teacher', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Reject a teacher request
router.put('/reject-teacher/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher.findById(id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    teacher.status = 'Rejected';
    await teacher.save();
    res.json({ message: 'Teacher rejected successfully', teacher });
  } catch (error) {
    console.error('Error rejecting teacher', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ============================
// Student Routes
// ============================

// Get all pending student requests
router.get('/pending-student-requests', async (req, res) => {
  try {
    const pendingStudents = await User.find({ status: 'Pending', role: 'Student' });
    res.status(200).json(pendingStudents);
  } catch (err) {
    console.error('Error fetching student requests', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Approve or reject a student request
router.put('/update-student-status/:id', async (req, res) => {
  const { status } = req.body;

  try {
    const student = await User.findById(req.params.id);
    if (!student || student.role !== 'Student') {
      return res.status(404).json({ msg: 'Student not found' });
    }

    student.status = status;
    await student.save();

    res.json({ msg: 'Student status updated successfully' });
  } catch (err) {
    console.error('Error updating student status', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
