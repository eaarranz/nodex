const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const deck = require("./deck.json");

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
