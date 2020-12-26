import express from 'express';
import mysql from 'mysql';



const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cytaty_db'
  });


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL database connection ok!");
});


const router = express.Router();




router.get('/', (req, res) => {

    let sql = 'SELECT id, cytat, osoba FROM cytaty_tabela ORDER BY id DESC';

    db.query(sql,(err,result) => {
        if (err) throw err;
        var cytatyobj = Object.assign({}, result);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(cytatyobj));
    });
});

router.get('/leaderboard', (req, res) => {

    let sql = 'SELECT osoba, count(*) as number FROM cytaty_tabela GROUP BY osoba ORDER BY count(*) DESC;';

    db.query(sql,(err,result) => {
        if (err) throw err;
        var leaderboardobj = Object.assign({}, result);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(leaderboardobj));
    });
});


router.post('/',(req, res) => {
    const cytat = req.body;
    cytaty.push(cytat);
    res.send(`Cytat dodany do bazy danych! Treść: ${cytat.cytat} Osoba: ${cytat.osoba}`);
});

export default router;