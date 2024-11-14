// server/controllers/authController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists with email:", email);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password synchronously to ensure consistency
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log("Hashed password on registration:", hashedPassword); // Debugging line
    console.log("Plain password used to create hash:", password); // Debugging line

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Login user
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      console.log("Missing username or password");
      return res.status(400).json({ message: "Username and password are required" });
    }

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      console.log("User not found:", username);
      return res.status(400).json({ message: 'User not found' });
    }

    // Debugging: Log the entered password and stored hash
    console.log("Entered password during login:", password);
    console.log("Stored hashed password from database:", user.password);

    // Use bcrypt.compareSync for synchronous password comparison
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    console.log("Password comparison result on login:", isPasswordValid); // Debugging line

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate a JWT token if password matches
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

// Logout user
export const logoutUser = (req, res) => {
  console.log("User logged out");
  res.json({ message: 'User logged out' });
};
