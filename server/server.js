import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

await connectDB();

app.use("/api/users", userRouter); //montez router ul

app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
