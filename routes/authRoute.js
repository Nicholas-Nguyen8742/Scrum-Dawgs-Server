const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register new user
router.post("/register", (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send("Please enter the required fields.");
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    newUser.save();
    res.status(200).send("Registered successfully");
  } catch (err) {
    res.status(500).send("Failed registration");
  }
});

// router
//     .route('/login')
//     .post(authController.login);

// router 
//     .route('/current')
//     .get(authController.current);


module.exports = router;
