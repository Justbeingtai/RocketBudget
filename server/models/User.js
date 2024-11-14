// server/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Keep the password field minimal
});

// No additional hooks or methods here, as hashing is managed in the controller

export default mongoose.model('User', userSchema);
