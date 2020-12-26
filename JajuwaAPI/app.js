import express from 'express';
import bodyParser from 'body-parser';

import cytatyRoutes from './routes/cytaty.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/cytaty', cytatyRoutes);

app.get('/',(req, res) => {
    res.json(
        {
            "Wiadomosc": "Witamy w oficjalym REST API JAJUWY!", 
            "endpoints": [
              "GET /cytaty", 
              "GET /cytaty/leaderboard", 
              "POST /cytaty?cytat=cytat&osoba=osoba"
            ]
          }
    );
});


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}/`));