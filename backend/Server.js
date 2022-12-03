const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const dotenv = require("dotenv");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const userRoutes = require("./routes/userRoutes.js");

dotenv.config();

//DataBase
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

//Routes
app.use("/api/users", userRoutes);


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server is running on ${PORT}`));
