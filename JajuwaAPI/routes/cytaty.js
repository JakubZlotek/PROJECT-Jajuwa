import express from "express";
import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cytaty_db",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL database connection ok!");
});

const router = express.Router();

router.get("/", (req, res) => {
  let sql = "SELECT cytat, osoba FROM cytaty_tabela";

  db.query(sql, (err, result) => {
    if (err) throw err;
    var cytatyobj = Object.assign({}, result);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(cytatyobj));
  });
});

router.get("/leaderboard", (req, res) => {
  let sql =
    "SELECT osoba, count(*) as number FROM cytaty_tabela GROUP BY osoba ORDER BY count(*) DESC;";

  db.query(sql, (err, result) => {
    if (err) throw err;
    var leaderboardobj = Object.assign({}, result);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(leaderboardobj));
  });
});

router.get("/count", (req, res) => {
  let sql = "SELECT count(id) as co FROM cytaty_tabela";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json({
      count: result[0].co,
    });
  });
});

router.get("/add/:osoba/:cytat", (req, res) => {
  var cytat = req.params.cytat;
  var osoba = req.params.osoba;

  let sql =
    "INSERT INTO cytaty_tabela (cytat, osoba) VALUES ('" +
    cytat +
    "','" +
    osoba +
    "')";

  db.query(sql, (err, result) => {
    if (err) throw err;
  });
  res.send(`Cytat dodany do bazy danych! Treść: ${cytat} Osoba: ${osoba}`);
});

export default router;
