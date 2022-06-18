require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors()); // cors package prevents CORS errors when using client side API calls
app.use(express.json()); // Enable req.body middleware


// Import routes from ${./routes} directory
const authRoutes = require("./routes/authRoute");
const githubRoutes = require("./routes/githubRoute");

// Root url for respective routes
app.use('/auth', authRoutes);
app.use('/github', githubRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});