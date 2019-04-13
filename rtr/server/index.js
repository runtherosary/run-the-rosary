require("dotenv").config();
const app = require("express")();
const { json } = require("body-parser");
const massive = require("massive");
const { login, register } = require('./controllers/userCtrl')
const { getRosary, getDailyPrayers } = require('./controllers/prayerCtrl')

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log("Massive", err));

// ----------USER ENDPOINTS------------
app.post('/login', login)
app.post('/register', register)

// ----------PRAYER ENDPOINTS------------
app.get('/prayers/rosary', getRosary)
app.get('/prayers/daily', getDailyPrayers)




app.listen(process.env.SERVER_PORT, () =>
  console.log(`listening on port ${process.env.SERVER_PORT}`)
);
