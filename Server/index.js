import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://Nidhi:Nidhi16@sweetnamkeen.3md1r.mongodb.net/SweetNamkeen?retryWrites=true&w=majority&appName=SweetNamkeen";

const ProductSchema = new mongoose.Schema({
  ProductName: String,
  ProductDescription: String,
  ProductIngredients: String,
  ProductWeight: String,
  Price: String,
  ShelfLife: String,
  ProductImage: String,
  Category: String,
  StateOrigin: String,
});

const catSchema = new mongoose.Schema({
  name: String,
  image: String,
});

const Product = mongoose.model("Product", ProductSchema, "sweet");

const Cat2 = mongoose.model("cat2", catSchema , "category");


app.get("/cat2", async (req , res)=>{
  try {
    const cat = await Cat2.find();
    res.json(cat);
  } catch (error) {
    console.log(error);
    
  }
})

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas using Mongoose!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// API endpoint to fetch products (with category filtering)
app.get("/product", async (req, res) => {
  try {
    const defaultCategory = "Sweet";

    // Fetch products only from the "sweet" category
    const products = await Product.find({ Category: defaultCategory });

    // Sanitize Price field for invalid values and remove non-numeric characters
    const sanitizedProducts = products.map((product) => {
      const sanitizedPrice = parseFloat(
        (product.Price || "").replace(/[^0-9.]/g, "") // Remove non-numeric characters
      ) || 0; // Default invalid prices to 0

      return {
        ...product._doc,
        Price: sanitizedPrice,
      };
    });

    res.json(sanitizedProducts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
    console.error("Error fetching products:", error);
  }
});


app.listen(4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});
