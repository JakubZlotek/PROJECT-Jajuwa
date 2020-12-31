import express from "express";
import bodyParser from "body-parser";
import path from "path";
const __dirname = path.resolve();

import cytatyRoutes from "./routes/cytaty.js";
import memyRoutes from "./routes/memy.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

/*

! The public folder is currently not working it needs angularjs post method change

app.use('/', express.static(__dirname + "/public"));
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public");
});
*/

app.get("/", (req, res) => {
  res.json({
    Wiadomosc: "Witamy w oficjalym REST API JAJUWY!",
    endpoints: [
      "GET /cytaty",
      "POST /cytaty",
      "GET /cytaty/leaderboard",
      "GET /cytaty/count",
      "GET /memy/[numer zjecia]/[tekst]",
    ],
  });
});

app.use("/cytaty", cytatyRoutes);
app.use("/memy", memyRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}/`)
);
