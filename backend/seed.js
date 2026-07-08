const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./model/Product");

dotenv.config();

const sampleProducts = [
  {
    name: "Wireless Headphones",
    description:
      "Immersive sound with 40-hour battery life and active noise cancellation.",
    price: 1499,
    category: "Electronics",
    stock: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Smart Watch",
    description:
      "Track your fitness, receive calls, and monitor health insights on the go.",
    price: 2499,
    category: "Electronics",
    stock: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Leather Backpack",
    description:
      "Premium faux leather backpack with spacious compartments for daily use.",
    price: 1299,
    category: "Accessories",
    stock: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Running Shoes",
    description:
      "Lightweight sneakers designed for comfort and all-day performance.",
    price: 1899,
    category: "Footwear",
    stock: 18,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Coffee Maker",
    description:
      "Brew rich coffee with a compact and stylish machine for your kitchen.",
    price: 2199,
    category: "Home",
    stock: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(sampleProducts);

    console.log(`Seeded ${createdProducts.length} products successfully`);
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
};

seedProducts();
