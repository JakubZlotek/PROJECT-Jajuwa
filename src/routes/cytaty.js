import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cytaty_db",
});

// GET > cytaty

router.get("/", (req, res) => {
  let sql = "SELECT cytat, osoba FROM cytaty_tabela";



  db.query(sql, (err, result) => {
    if (err) throw err;
    var cytatyobj = Object.assign({}, result);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(cytatyobj));
  });


});

// {cytat + osoba} > POST > dodanie cytatu

router.post("/", (req, res) => {
  var cytat = req.body.cytat;
  var osoba = req.body.osoba;

  let sql = "INSERT INTO cytaty_tabela (cytat, osoba) VALUES (?,?)";



  db.query(sql, [cytat, osoba], (err, result) => {
    if (err) throw err;
  });

  res.send(`Cytat dodany do bazy danych! Treść: ${cytat} Osoba: ${osoba}`);

});

// GET > ranking

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

// GET > ogolna ilosc cytatow

router.get("/count", (req, res) => {
  let sql = "SELECT count(id) as co FROM cytaty_tabela";

 

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json({
      count: result[0].co,
    });
  });


});

export default router;
