// server/config/connection.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectOptions = {
  tls: true,
  tlsAllowInvalidCertificates: true,
};

mongoose.connect(process.env.MONGODB_URI, connectOptions);

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default db;
