// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();
// const teacherRoutes = require('./routes/teacher');
// // const studentRoutes = require('./routes/studentroute');


// const authRoutes = require('./routes/auth');
// const superAdminRoutes = require('./routes/superadmin');



// // Use the superadmin routes
// const app = express();
// app.use(cors());
// app.use(express.json());
// // app.use(bodyParser.json());

// const XLSX = require('xlsx');
// const nodemailer = require('nodemailer');
// const multer = require('multer');

// const fs = require('fs');
// const upload = multer();

// const { v4: uuidv4 } = require('uuid');
// // const app = express();
// // app.use(cors());
// // const nodemailer = require('nodemailer');
// const FILE_PATH = './abc.xlsx';

// // Helper to read Excel data
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

// app.post('/api/data', (req, res) => {
//   try {
//     const { name,fatherName,motherName, otherPhone,gender, email
// ,phone,address,
// rollno,course,year,totalpresent,totalabsent,attenpercentage,oneA,
// oneB,oneC,twoA, twoB,twoC } = req.body;
//     if (!name||!fatherName||!motherName||!email||!address||!gender||!phone||!otherPhone||!
// rollno||!course||!year||!totalpresent||!totalabsent||!attenpercentage||!oneA||!oneB||!oneC||!twoA||!
// twoB||!twoC) {
//       return res.status(400).send({ message: 'Name and Email are required.' });
//     }

//     const id = uuidv4();
//     const newData = { id, name,fatherName,motherName,
// otherPhone,gender, rollno,
// email,phone,address,course,year,totalpresent,totalabsent,attenpercentage,oneA,oneB,oneC,twoA,twoB,twoB,twoC};
//     const data = readExcel();
//     data.push(newData);
//     writeExcel(data);
//     res.status(201).send({ message: 'Data added successfully', id });
//   } catch (error) {
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });

// // GET - Fetch all data
// app.get('/api/data', (req, res) => {
//   try {
//     const data = readExcel();
//     res.status(200).send(data);
//   } catch (error) {
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });

// // DELETE - Delete data by ID
// app.delete('/api/data/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     let data = readExcel();
//     const filteredData = data.filter(item => item.id !== id);

//     if (data.length === filteredData.length) {
//       return res.status(404).send({ message: 'ID not found' });
//     }

//     writeExcel(filteredData);
//     res.status(200).send({ message: 'Data deleted successfully' });
//   } catch (error) {
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });

// // PUT - Edit data by ID
// app.put('/api/data/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name,fatherName,motherName, rollno,
// otherPhone,gender,email,phone,address,course,year,totalpresent,totalabsent,attenpercentage,
// oneA,oneB,oneC,twoA,twoB,twoC} = req.body;

//     let data = readExcel();
//     let item = data.find(item => item.id === id);

//     if (!item) {
//       return res.status(404).send({ message: 'ID not found' });
//     }
//     item.name = name || item.name;
//     item.fatherName=fatherName||item.fatherName;
//     item.motherName=motherName||item.motherName;
//     item.email = email || item.email;
//     item.otherPhone= otherPhone||item.otherPhone;
//     item.gender=gender||item.gender
//     item. rollno=rollno||item.rollno
//     item.phone = phone || item.phone;
//     item.address = address || item.address;
//     item.course=course||item.course
//     item.year=year||item.year
//     item.totalpresent=totalpresent||item.totalpresent
//     item.totalabsent=totalabsent||item.totalabsent
//     item.attenpercentage=attenpercentage||item.attenpercentage
//     item.oneA=oneA||item.oneA
//     item.oneB=oneB||item.oneB
//     item.oneC=oneC||item.oneC
//     item.twoA=twoA||item.twoA
//     item.twoB=twoB||item.twoB
//     item.twoC=twoC||item.twoC
//     writeExcel(data);
//     res.status(200).send({ message: 'Data updated successfully' });
//   } catch (error) {
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });
// app.use('/api/superadmin', superAdminRoutes);


// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));
// app.use('/api/teacher', teacherRoutes);
// app.use('/api/auth', authRoutes);
// // app.use('/api/students', studentRoutes);
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const session = require("express-session");
// const passport = require("./config/passport");
// const XLSX = require("xlsx");
// const multer = require("multer");
// const fs = require("fs");
// const { v4: uuidv4 } = require("uuid");

// dotenv.config();

// const app = express();
// const upload = multer();
// const FILE_PATH = "./abc.xlsx";

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Session Middleware
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "default_secret",
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
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
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
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//   XLSX.writeFile(workbook, FILE_PATH);
// };

// // Routes
// const authRoutes = require("./routes/auth");
// const superAdminRoutes = require("./routes/superadmin");
// const teacherRoutes = require("./routes/teacher");

// app.use("/api/auth", authRoutes);
// app.use("/api/superadmin", superAdminRoutes);
// app.use("/api/teacher", teacherRoutes);

// // API for Excel Data
// app.post("/api/data", (req, res) => {
//   try {
//     const { name, email, phone, ...otherFields } = req.body;
//     if (!name || !email || !phone) {
//       return res.status(400).send({ message: "Name, email, and phone are required." });
//     }

//     const id = uuidv4();
//     const newData = { id, name, email, phone, ...otherFields };
//     const data = readExcel();
//     data.push(newData);
//     writeExcel(data);

//     res.status(201).send({ message: "Data added successfully", id });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// app.get("/api/data", (req, res) => {
//   try {
//     const data = readExcel();
//     res.status(200).send(data);
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// app.put("/api/data/:id", (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = readExcel();
//     const itemIndex = data.findIndex((item) => item.id === id);

//     if (itemIndex === -1) {
//       return res.status(404).send({ message: "ID not found" });
//     }

//     data[itemIndex] = { ...data[itemIndex], ...req.body };
//     writeExcel(data);

//     res.status(200).send({ message: "Data updated successfully" });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// app.delete("/api/data/:id", (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = readExcel();
//     const updatedData = data.filter((item) => item.id !== id);

//     if (data.length === updatedData.length) {
//       return res.status(404).send({ message: "ID not found" });
//     }

//     writeExcel(updatedData);
//     res.status(200).send({ message: "Data deleted successfully" });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });










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
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
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

// // Routes
// const authRoutes = require('./routes/auth');
// const superAdminRoutes = require('./routes/superadmin');
// const teacherRoutes = require('./routes/teacher');

// app.use('/api/auth', authRoutes);
// app.use('/api/superadmin', superAdminRoutes);
// app.use('/api/teacher', teacherRoutes);

// // API for Excel Data
// app.post('/api/data', (req, res) => {
//   try {
//     const { name, email, phone, ...otherFields } = req.body;
//     if (!name || !email || !phone) {
//       return res.status(400).send({ message: 'Name, email, and phone are required.' });
//     }

//     const id = uuidv4();
//     const newData = { id, name, email, phone, ...otherFields };
//     const data = readExcel();
//     data.push(newData);
//     writeExcel(data);

//     res.status(201).send({ message: 'Data added successfully', id });
//   } catch (error) {
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
//   try {
//     const { id } = req.params;
//     const data = readExcel();
//     const itemIndex = data.findIndex((item) => item.id === id);

//     if (itemIndex === -1) {
//       return res.status(404).send({ message: 'ID not found' });
//     }

//     data[itemIndex] = { ...data[itemIndex], ...req.body };
//     writeExcel(data);

//     res.status(200).send({ message: 'Data updated successfully' });
//   } catch (error) {
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });

// app.delete('/api/data/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = readExcel();
//     const updatedData = data.filter((item) => item.id !== id);

//     if (data.length === updatedData.length) {
//       return res.status(404).send({ message: 'ID not found' });
//     }

//     writeExcel(updatedData);
//     res.status(200).send({ message: 'Data deleted successfully' });
//   } catch (error) {
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





















const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('./config/passport');
const XLSX = require('xlsx');
const multer = require('multer');
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
const readExcel = () => {
  if (fs.existsSync(FILE_PATH)) {
    const workbook = XLSX.readFile(FILE_PATH);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    return XLSX.utils.sheet_to_json(sheet);
  }
  return [];
};

const writeExcel = (data) => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, FILE_PATH);
};

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
    const { name, email, phone, ...otherFields } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).send({ message: 'Name, email, and phone are required.' });
    }

    const id = uuidv4();
    const newData = { id, name, email, phone, ...otherFields };
    const data = readExcel();
    data.push(newData);
    writeExcel(data);

    res.status(201).send({ message: 'Data added successfully', id });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.get('/api/data', (req, res) => {
  try {
    const data = readExcel();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.put('/api/data/:id', (req, res) => {
  try {
    const { id } = req.params;
    const data = readExcel();
    const itemIndex = data.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return res.status(404).send({ message: 'ID not found' });
    }

    data[itemIndex] = { ...data[itemIndex], ...req.body };
    writeExcel(data);

    res.status(200).send({ message: 'Data updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.delete('/api/data/:id', (req, res) => {
  try {
    const { id } = req.params;
    const data = readExcel();
    const updatedData = data.filter((item) => item.id !== id);

    if (data.length === updatedData.length) {
      return res.status(404).send({ message: 'ID not found' });
    }

    writeExcel(updatedData);
    res.status(200).send({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// API for Sending Email
app.post('/api/send-email', async (req, res) => {
  const { recipient, message } = req.body;

  if (!recipient || !message) {
    return res.status(400).send({ message: 'Recipient and message are required.' });
  }

  try {
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "ayushmalviya990@gmail.com", // Your email address
        pass: "ayush@123", // Your email password
      },
    });

    // Email details
    const mailOptions = {
      from: "ayushmalviya@gmail.com",
      to: recipient,
      subject: 'Student Report Details',
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email' });
  }
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
