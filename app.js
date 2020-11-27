const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const deck = require("./deck.json");

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.get("/", (req, res) => res.send("Hello from Nuclio!"));

app.get("/hand", (req, res) => {
  const shuffled = deck.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 5);
  res.send(selected);
});

app.get("/card", (req, res) => {
  const shuffled = deck.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 1);
  res.send(selected);
});

app.get("/deck", (req, res) => res.send(deck));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
