const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

// [ROUTE] - "/auth/register"
// [POST] - Creates new user through registration
exports.register = (req, res) => {
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
};

// [ROUTE] - "/auth/login"
// [POST] - Creates & sends JWT for user authorization
// exports.login = (req, res) => {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       return res.status(404).send("User not found");
//     }
//     const validPassword = await bcrypt.compare(req.body.password, user.password);
//     if (!validPassword) {
//       return res.status(400).send("Invalid password");
//     }
//     if (user) {
//       const token = jwt.sign(
//         {
//           _id: user._id,
//           username: user.username,
//           email: user.email,
//         },
//         process.env.JWT_KEY,
//         { expiresIn: "24h" }
//       );
//       return res.json({ status: "ok", user: token });
//     } else {
//       return res.json({ status: "error", user: false });
//     }
// };

// [ROUTE] - "/auth/current"
// [GET] - Gets currently logged in user to validate JWT authentication
// exports.current =
//   (authenticate,
//   (req, res) => {
//     if (!req.headers.authorization) {
//       return res.status(401).send("Please login");
//     }

//     // Parse the Bearer token
//     const authToken = req.headers.authorization.split(" ")[1];

//     // Verify the token
//     jwt.verify(authToken, process.env.JWT_KEY, (err, decoded) => {
//       if (err) {
//         return res.status(401).send("Invalid auth token");
//       }

//       knex("users")
//         .where({ email: decoded.email })
//         .first()
//         .then((user) => {
//           // Respond with the user data
//           delete user.password;
//           res.json(user);
//         });
//     });
//   });
