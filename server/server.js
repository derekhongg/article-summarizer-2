require("dotenv").config();

const express = require("express");
const cors = require("cors");
const summaryRoutes = require("./routes/summaryRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/", summaryRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
