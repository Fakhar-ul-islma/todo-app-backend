require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// MongoDB سے کنیکشن
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connection with mongodb is successful"))
  .catch((err) => console.error("MongoDB connection error:", err));

