const express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`Server on ${PORT}`));

// get route
app.get("/", (req, res) => {
  res.send("Get Success");
  console.log(res.send);
});
