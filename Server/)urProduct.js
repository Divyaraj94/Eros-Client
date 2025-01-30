// server.js (or any backend entry file)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://Nidhi:Nidhi16@sweetnamkeen.3md1r.mongodb.net/SweetNamkeen", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Category schema
const categorySchema = new mongoose.Schema({
  name: String,
  image: String,
});

// Create a Category model
const Category = mongoose.model("Category", categorySchema);

// API endpoint to fetch categories
app.get("/api/categories", async (req, res) => {
  try {
    const categories = await Category.find(); // Fetch categories
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
