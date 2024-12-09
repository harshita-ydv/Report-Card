// routes/superadmin.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route to get all pending teacher requests (for Super Admin)
router.get('/pending-teacher-requests', async (req, res) => {
  try {
    const pendingTeachers = await User.find({ status: 'Pending', role: 'Teacher' });
    console.log(pendingTeachers); // Log the result
    res.status(200).json(pendingTeachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching teacher requests' });
  }
});

// Route to approve a teacher's request
router.put('/approve/:id', async (req, res) => {
  try {
    // Find teacher by ID
    const teacher = await User.findById(req.params.id);
    if (!teacher || teacher.role !== 'Teacher') {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    // Update teacher status to 'accepted'
    teacher.status = 'accepted';
    await teacher.save();

    res.json({ message: 'Teacher approved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to reject a teacher's request
router.put('/reject/:id', async (req, res) => {
  try {
    // Find teacher by ID
    const teacher = await User.findById(req.params.id);
    if (!teacher || teacher.role !== 'Teacher') {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    // Update teacher status to 'rejected'
    teacher.status = 'rejected';
    await teacher.save();

    res.json({ message: 'Teacher rejected successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
