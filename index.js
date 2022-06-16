const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;

// Import routes from ${./routes} directory
const authRoutes = require("./routes/authRoute");

dotenv.config();

// Mongoose middleware to connect to the Mongo DB
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

// app.use(cors()); // cors package prevents CORS errors when using client side API calls
app.use(express.json()); // Enable req.body middleware
app.use(helmet());
app.use(morgan("common"));

// Root url for respective routes
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
