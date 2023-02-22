const bcrypt = require("bcrypt");
const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the user
    const user = new User({
      firstName,
      lastName,
      email,
      hashedPassword,
    });
    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
};
