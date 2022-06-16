require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;

// Mongoose middleware to connect to the Mongo DB
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(cors()); // cors package prevents CORS errors when using client side API calls
app.use(express.json()); // Enable req.body middleware

// Import routes from ${./routes} directory
const authRoutes = require("./routes/authRoute");

// Root url for respective routes
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
