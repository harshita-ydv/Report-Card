
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('./config/passport');
const XLSX = require('xlsx');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const upload = multer();
const FILE_PATH = './abc.xlsx';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: true,
  })
);

// Passport.js Middleware
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Helper Functions for Excel File Handling

const path = require('path');

// Helper functions to read and write Excel data
const EXCEL_FILE_PATH = path.join(__dirname, 'abc.xlsx');

const readExcel = () => {
  if (!fs.existsSync(EXCEL_FILE_PATH)) {
    return [];
  }
  const workbook = XLSX.readFile(EXCEL_FILE_PATH);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
};













// const readExcel = () => {
//   if (fs.existsSync(FILE_PATH)) {
//     const workbook = XLSX.readFile(FILE_PATH);
//     const sheet = workbook.Sheets[workbook.SheetNames[0]];
//     return XLSX.utils.sheet_to_json(sheet);
//   }
//   return [];
// };

const writeExcel = (data) => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, FILE_PATH);
};


// Multer setup for handling file uploads
// const upload = multer();

// API for Sending Email with File Attachment
app.post('/api/send-email', upload.single('file'), async (req, res) => {
  const { email } = req.body; // Extract recipient email from the request body
  const file = req.file; // Extract file attachment

  if (!email || !file) {
    return res.status(400).send({ message: 'Email and file are required.' });
  }

  try {
    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "ayushmalviya990@gmail.com", // Use environment variables for sensitive data
        pass: "ixsw wfwp xspl tdtp",
      },
    });

    // Email options including file attachment
    const mailOptions = {
      from: "ayushmalviya990@gmail.com",
      to: email,
      subject: 'Student Report Card',
      text: 'Please find the attached report card.',
      attachments: [{ filename: file.originalname, content: file.buffer }],
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email' });
  }
});


// Routes
const authRoutes = require('./routes/auth');
const superAdminRoutes = require('./routes/superadmin');
const teacherRoutes = require('./routes/teacher');

app.use('/api/auth', authRoutes);
app.use('/api/superadmin', superAdminRoutes);
app.use('/api/teacher', teacherRoutes);

// API for Excel Data
app.post('/api/data', (req, res) => {
  try {
    const { name, email, phone, fatheremail, ...otherFields } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !fatheremail) {
      return res.status(400).send({ message: 'Name, email, phone, and fatheremail are required.' });
    }

    // Check if email and fatheremail are the same
    if (email === fatheremail) {
      return res.status(400).send({ message: 'Email and Father Email must be different.' });
    }

    const data = readExcel();

    // Check if email or fatheremail already exists
    const emailExists = data.some(student => student.email === email);
    const fatherEmailExists = data.some(student => student.fatheremail === fatheremail);

    if (emailExists) {
      return res.status(400).send({ message: 'The provided email is already in use.' });
    }

    if (fatherEmailExists) {
      return res.status(400).send({ message: 'The provided fatheremail is already in use.' });
    }

    // Generate a unique ID for the new entry
    const id = uuidv4();
    const newData = { id, name, email, phone, fatheremail, ...otherFields };

    // Add the new entry to the data array
    data.push(newData);

    // Write the updated data back to the Excel file
    writeExcel(data);

    res.status(201).send({ message: 'Data added successfully', id });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});



// app.post('/api/upload-excel', upload.single('file'), (req, res) => {
//   const { file } = req;

//   if (!file) {
//     return res.status(400).send({ message: 'No file uploaded.' });
//   }

//   try {
//     // Read the uploaded Excel file
//     const workbook = XLSX.read(file.buffer, { type: 'buffer' });
//     const sheet = workbook.Sheets[workbook.SheetNames[0]];

//     // Convert the Excel sheet into JSON data
//     const data = XLSX.utils.sheet_to_json(sheet);

//     // Validate data format (optional based on your schema)
//     if (data.length === 0 || !data[0].name || !data[0].email || !data[0].phone) {
//       return res.status(400).send({ message: 'Invalid data format in the Excel file.' });
//     }

//     // Add a unique ID to each row
//     const dataWithIds = data.map(item => ({
//       ...item,
//       id: uuidv4()  // Generate a unique ID for each row
//     }));

//     // Read the existing Excel file where you want to store the data
//     const existingData = readExcel();

//     // Merge new data with existing data (you can adjust the logic to suit your needs)
//     const mergedData = [...existingData, ...dataWithIds];

//     // Write the merged data back to the existing Excel file
//     writeExcel(mergedData);

//     res.status(200).send({ message: 'Excel data uploaded and processed successfully.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Failed to process the uploaded Excel file.' });
//   }
// });


app.post('/api/upload-excel', upload.single('file'), (req, res) => {
  const { file } = req;

  if (!file) {
    return res.status(400).send({ message: 'No file uploaded.' });
  }

  try {
    // Read the uploaded Excel file
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    // Convert the Excel sheet into JSON data
    const uploadedData = XLSX.utils.sheet_to_json(sheet);

    // Validate data format
    if (
      uploadedData.length === 0 ||
      !uploadedData[0].email ||
      !uploadedData[0].fatheremail
    ) {
      return res.status(400).send({ message: 'Invalid data format in the Excel file.' });
    }

    // Read existing data from the Excel file
    const existingData = readExcel();

    // Check for duplicate entries based on email and fatheremail
    const duplicates = uploadedData.filter((row) =>
      existingData.some(
        (existingRow) =>
          existingRow.email === row.email || existingRow.fatheremail === row.fatheremail
      )
    );

    if (duplicates.length > 0) {
      return res.status(400).send({
        message: 'Duplicate data found in the uploaded Excel file.',
        duplicates,
      });
    }

    // Add a unique ID to each row and merge data
    const dataWithIds = uploadedData.map((item) => ({
      ...item,
      id: uuidv4(), // Generate a unique ID for each row
    }));

    const mergedData = [...existingData, ...dataWithIds];

    // Write the merged data back to the Excel file
    writeExcel(mergedData);

    res.status(200).send({ message: 'Excel data uploaded and processed successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to process the uploaded Excel file.' });
  }
});




// ////////////////////////////////////////////////////////////////

cloudinary.config({
  cloud_name: ' dayuzreb2',
  api_key: '779315564742525',
  api_secret: 'IFliGRYmEPoR3R5y8RQjDOxO8jg',
});

// const app = express();
// app.use(cors());

// Set up multer for handling file uploads
// const storage = multer.memoryStorage();
const uploadd = multer({ storage: multer.memoryStorage() });

app.post('/upload-profile-photo', uploadd.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Upload the image to Cloudinary
  cloudinary.uploader
    .upload(
      req.file,
      {
        resource_type: 'auto', // Automatically determine file type (image, video, etc.)
      },
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: 'Image upload failed' });
        }

        // Send the Cloudinary image URL as the response
        res.json({ imageUrl: result.secure_url });
      }
    )
    .end(req.file.buffer); // Send the image buffer to Cloudinary
});














///////////////////////////////////////////////////////////////////////////

app.get('/api/data', (req, res) => {
  try {
    const data = readExcel();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// app.put('/api/data/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     const { email, fatheremail, ...otherFields } = req.body;

//     const data = readExcel();
//     const itemIndex = data.findIndex((item) => item.id === id);

//     if (itemIndex === -1) {
//       return res.status(404).send({ message: 'ID not found' });
//     }

//     // Check for email uniqueness (excluding the current record)
//     const emailExists = data.some(
//       (item, index) => index !== itemIndex && item.email === email
//     );

//     if (emailExists) {
//       return res.status(400).send({ message: 'The provided email is already in use.' });
//     }

//     // Check for fatheremail uniqueness (excluding the current record)
//     const fatherEmailExists = data.some(
//       (item, index) => index !== itemIndex && item.fatheremail === fatheremail
//     );

//     if (fatherEmailExists) {
//       return res.status(400).send({ message: 'The provided fatheremail is already in use.' });
//     }

//     // Update the record
//     data[itemIndex] = { ...data[itemIndex], email, fatheremail, ...otherFields };
//     writeExcel(data);

//     res.status(200).send({ message: 'Data updated successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });









app.put('/api/data/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { email, fatheremail, ...otherFields } = req.body;

    const data = readExcel();
    const itemIndex = data.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return res.status(404).send({ message: 'ID not found' });
    }

    // Check for email uniqueness (excluding the current record)
    const emailExists = data.some(
      (item, index) => index !== itemIndex && item.email === email
    );

    if (emailExists) {
      return res.status(400).send({ message: 'The provided email is already in use.' });
    }

    // Check for fatheremail uniqueness (excluding the current record)
    const fatherEmailExists = data.some(
      (item, index) => index !== itemIndex && item.fatheremail === fatheremail
    );

    if (fatherEmailExists) {
      return res.status(400).send({ message: 'The provided fatheremail is already in use.' });
    }

    // Update the record
    data[itemIndex] = { ...data[itemIndex], email, fatheremail, ...otherFields };
    writeExcel(data);

    res.status(200).send({ message: 'Data updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});














app.delete('/api/data/:id', (req, res) => {
  try {
    const { id } = req.params;  // Get the ID from the request parameters
    const data = readExcel();  // Read the current data from the Excel file

    // Filter out the record with the matching ID
    const updatedData = data.filter((item) => item.id !== id);

    // If no data was removed, return a 404 error
    if (data.length === updatedData.length) {
      return res.status(404).send({ message: 'ID not found' });
    }

    // Write the updated data back to the Excel file
    writeExcel(updatedData);

    res.status(200).send({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});


// API for Sending Email


// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});









































// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const session = require('express-session');
// const passport = require('./config/passport');
// const XLSX = require('xlsx');
// const multer = require('multer');
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');
// const nodemailer = require('nodemailer');
// const crypto = require('crypto'); // For generating secure tokens

// dotenv.config();

// const app = express();
// const upload = multer();
// const FILE_PATH = './abc.xlsx';

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Session Middleware
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || 'default_secret',
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // Passport.js Middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error(err));

// // Helper Functions for Excel File Handling
// const readExcel = () => {
//   if (fs.existsSync(FILE_PATH)) {
//     const workbook = XLSX.readFile(FILE_PATH);
//     const sheet = workbook.Sheets[workbook.SheetNames[0]];
//     return XLSX.utils.sheet_to_json(sheet);
//   }
//   return [];
// };

// const writeExcel = (data) => {
//   const workbook = XLSX.utils.book_new();
//   const worksheet = XLSX.utils.json_to_sheet(data);
//   XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//   XLSX.writeFile(workbook, FILE_PATH);
// };

// // API for Sending Email with File Attachment
// app.post('/api/send-email', upload.single('file'), async (req, res) => {
//   const { email } = req.body; // Extract recipient email from the request body
//   const file = req.file; // Extract file attachment

//   if (!email || !file) {
//     return res.status(400).send({ message: 'Email and file are required.' });
//   }

//   try {
//     // Nodemailer transporter configuration
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: "ayushmalviya990@gmail.com", // Use environment variables for sensitive data
//         pass: "ixsw wfwp xspl tdtp",
//       },
//     });

//     // Email options including file attachment
//     const mailOptions = {
//       from: "ayushmalviya990@gmail.com",
//       to: email,
//       subject: 'Student Report Card',
//       text: 'Please find the attached report card.',
//       attachments: [{ filename: file.originalname, content: file.buffer }],
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);
//     res.status(200).send({ message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send({ message: 'Failed to send email' });
//   }
// });

// // Forgot Password Route
// app.post('/api/auth/forgot-password', async (req, res) => {
//   try {
//     const { email } = req.body;

//     // Validate email
//     if (!email) {
//       return res.status(400).send({ message: 'Email is required' });
//     }

//     // Read data from your data source (Excel)
//     const users = readExcel(); // Replace with your function to read user data

//     // Check if the email exists in the users data
//     const user = users.find(user => user.email === email);
//     if (!user) {
//       return res.status(404).send({ message: 'No account found with this email' });
//     }

//     // Generate a reset token
//     const resetToken = crypto.randomBytes(32).toString('hex');
//     const tokenExpiry = Date.now() + 3600000; // Token valid for 1 hour

//     // Store the token and expiry in the user's record
//     user.resetToken = resetToken;
//     user.tokenExpiry = tokenExpiry;
//     writeExcel(users); // Save the updated data back to the Excel file

//     // Send the reset email with the reset token
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail', // or another SMTP service
//       auth: {
//         user: 'ayushmalviya990@gmail.com', // Use your email credentials
//         pass: 'ixsw wfwp xspl tdtp', // Use your email password or app-specific password
//       },
//     });

//     const resetLink = `http://localhost:5000/reset-password/${resetToken}`;
//     const mailOptions = {
//       from: 'ayushmalviya990@gmail.com',
//       to: email,
//       subject: 'Password Reset Request',
//       text: `You requested a password reset. Click the link to reset your password: ${resetLink}`,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).send({ message: 'Password reset email sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });app.post('/api/auth/forgot-password', async (req, res) => {
//   try {
//     const { email, sendToEmail } = req.body;  // Accepting both email and sendToEmail

//     // Validate input
//     if (!email || !sendToEmail) {
//       return res.status(400).send({ message: 'Email and SendToEmail are required' });
//     }

//     // Read data from your data source (Excel)
//     const users = readExcel(); // Replace with your function to read user data

//     // Check if the email exists in the users data
//     const user = users.find(user => user.email === email);
//     if (!user) {
//       return res.status(404).send({ message: 'No account found with this email' });
//     }

//     // Generate a reset token
//     const resetToken = crypto.randomBytes(32).toString('hex');
//     const tokenExpiry = Date.now() + 3600000; // Token valid for 1 hour

//     // Store the token and expiry in the user's record
//     user.resetToken = resetToken;
//     user.tokenExpiry = tokenExpiry;
//     writeExcel(users); // Save the updated data back to the Excel file

//     // Send the reset email to the specified `sendToEmail`
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail', // or another SMTP service
//       auth: {
//         user: 'ayushmalviya990@gmail.com', // Use your email credentials
//         pass: 'ixsw wfwp xspl tdtp', // Use your email password or app-specific password
//       },
//     });

//     const resetLink = `http://localhost:5000/reset-password/${resetToken}`;
//     const mailOptions = {
//       from: 'ayushmalviya990@gmail.com',
//       to: sendToEmail,  // Send the reset link to the provided email
//       subject: 'Password Reset Request',
//       text: `You requested a password reset. Click the link to reset your password: ${resetLink}`,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).send({ message: 'Password reset email sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });


// // Reset Password Route
// app.post('/api/auth/reset-password', async (req, res) => {
//   try {
//     const { resetToken, newPassword } = req.body;

//     // Validate input
//     if (!resetToken || !newPassword) {
//       return res.status(400).send({ message: 'Reset token and new password are required' });
//     }

//     // Read data from your data source (Excel)
//     const users = readExcel(); // Replace with your function to read user data

//     // Find user by reset token and check if token is still valid
//     const user = users.find(
//       (user) => user.resetToken === resetToken && user.tokenExpiry > Date.now()
//     );

//     if (!user) {
//       return res.status(400).send({ message: 'Invalid or expired reset token' });
//     }

//     // Update the user's password
//     user.password = newPassword; // Ideally, hash the password before storing it
//     delete user.resetToken; // Remove reset token after successful reset
//     delete user.tokenExpiry; // Remove token expiry after successful reset

//     writeExcel(users); // Save the updated data back to the Excel file

//     res.status(200).send({ message: 'Password has been reset successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });

// // Routes for handling student data
// const authRoutes = require('./routes/auth');
// const superAdminRoutes = require('./routes/superadmin');
// const teacherRoutes = require('./routes/teacher');

// app.use('/api/auth', authRoutes);
// app.use('/api/superadmin', superAdminRoutes);
// app.use('/api/teacher', teacherRoutes);

// // API for Excel Data
// app.post('/api/data', (req, res) => {
//   try {
//     const { name, email, phone, fatheremail, ...otherFields } = req.body;

//     // Validate required fields
//     if (!name || !email || !phone || !fatheremail) {
//       return res.status(400).send({ message: 'Name, email, phone, and fatheremail are required.' });
//     }

//     const data = readExcel();

//     // Check if email or fatheremail already exists
//     const emailExists = data.some(student => student.email === email);
//     const fatherEmailExists = data.some(student => student.fatheremail === fatheremail);

//     if (emailExists) {
//       return res.status(400).send({ message: 'The provided email is already in use.' });
//     }

//     if (fatherEmailExists) {
//       return res.status(400).send({ message: 'The provided fatheremail is already in use.' });
//     }

//     // Generate a unique ID for the new entry
//     const id = uuidv4();
//     const newData = { id, name, email, phone, fatheremail, ...otherFields };

//     // Add the new entry to the data array
//     data.push(newData);

//     // Write the updated data back to the Excel file
//     writeExcel(data);

//     res.status(201).send({ message: 'Data added successfully', id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });

// app.get('/api/data', (req, res) => {
//   try {
//     const data = readExcel();
//     res.status(200).send(data);
//   } catch (error) {
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });

// app.put('/api/data/:id', (req, res) => {
//   // Add your data updating logic here...
// });

// // Server setup
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
