const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.get("/wifi", (req, res) => {
  const data = {
    wifilist: ["ssid1, -xx", "ssid2, -bb", "ssid3, -yy", "ssid4,-zz"],
  };
  console.log("--> route hit");
  res.json(data);
});

app.get("/wifisave", (req, res) => {
  if (req.body?.password === "password") {
    res.json({ status: "success", deviceId: "german-shepheard-work" });
  } else {
    res.json({ status: "error" });
  }
});

app.listen("3000", () => {
  console.log("server started at port 3000");
});
