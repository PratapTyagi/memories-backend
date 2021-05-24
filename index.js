import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

// Always necessory files
const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Middleware
app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://Pratap_Tyagi:0000@cluster0.fhpyi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// MongoDb Connection
const PORT = process.env.PORT || 8080;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
  })
  .catch((e) => {
    console.log(e.message);
  });

mongoose.set("useFindAndModify", false);
