import express from "express";
import "dotenv/config";
import cors from "cors";
import dbConnect from "./config/db.js";
import authRouter from "./routes/authRoute.js";

const app = express();

const port = process.env.PORT || 4000;

await dbConnect();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.use("/api/user/", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
