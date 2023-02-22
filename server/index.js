const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const cors = require("cors");

app.listen(PORT, () => console.log(`Server on ${PORT}`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MW
app.use(
  cors({
    origin: "http://localhost:3000/",
  })
);

// post route
app.use("/api/users", userRoute);

// MDB connection
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://jnhatch3:MongoDB0894@cluster0.kfcq1mh.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    console.log("Connected to Fine-Designs-Portal project on MongoDB ")
  )
  .catch((err) => console.log(err));
