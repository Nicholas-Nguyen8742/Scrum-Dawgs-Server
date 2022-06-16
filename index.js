require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

// Mongoose middleware to connect to the Mongo DB
MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('')
  })

app.use(cors()); // cors package prevents CORS errors when using client side API calls
app.use(helmet());
app.use(morgan("common"));
app.use(express.json()); // Enable req.body middleware

// Import routes from ${./routes} directory
const authRoutes = require("./routes/authRoute");

// Root url for respective routes
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
