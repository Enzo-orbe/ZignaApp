const express = require("express");
const app = express();
const cors = require("cors");
const phonesRoutes = require("./routes/phonesRoutes");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/phones", phonesRoutes);

app.listen("3001", () => {
  console.log("Server run on port");
});
