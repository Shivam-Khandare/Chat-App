import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "cookie.man@example.com",
    fullName: "Cookie Man",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dq5gr5cy6/image/upload/v1753211358/random1_omiji0.avif",
  },
  {
    email: "sophia.davis@example.com",
    fullName: "Teasing Cow",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dq5gr5cy6/image/upload/v1753211358/cow_wujunr.avif",
  },
  {
    email: "frustated.man@example.com",
    fullName: "Frustated Man",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dq5gr5cy6/image/upload/v1753211358/frustated_khtqdf.avif",
  },
  {
    email: "calm.dog@example.com",
    fullName: "Calm Dog",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dq5gr5cy6/image/upload/v1753211358/doggo_v5dm5d.avif",
  },
  {
    email: "isabella.brown@example.com",
    fullName: "Lego Boy",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dq5gr5cy6/image/upload/v1753211358/cartoomman_zwollw.avif",
  },
  {
    email: "Smart.Pineapple@example.com",
    fullName: "Smart Pineapple",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dq5gr5cy6/image/upload/v1753211358/pineapp_e_byxi4p.avif",
  },
  {
    email: "dead.head@example.com",
    fullName: "Dead Head",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dq5gr5cy6/image/upload/v1753211358/skeleHead_qjyb4d.avif",
  },
  {
    email: "sad.man@example.com",
    fullName: "Sad Man",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dq5gr5cy6/image/upload/v1753211358/sadBoy_k1xqsp.avif",
  },

  {
    email: "donald.trump@example.com",
    fullName: "Donald Trump",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dq5gr5cy6/image/upload/v1753211358/trump_sfqagi.avif",
  },
  {
    email: "cool.doggy@example.com",
    fullName: "Cool Doggy",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dq5gr5cy6/image/upload/v1753211358/cooldog_ijkteo.avif",
  },
  {
    email: "skele.dude@example.com",
    fullName: "Skeleton Dude",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dq5gr5cy6/image/upload/v1753167715/moy0ifppfyi30amn6h8s.avif",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();