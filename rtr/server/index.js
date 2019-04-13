require("dotenv").config();
const app = require("express")();
const { json } = require("body-parser");
const massive = require("massive");
const { login, register, currentUser, getAllUsers } = require('./controllers/userCtrl')
const { getPrayersByID, getPrayersByType, getPrayersByCategory, getPrayersByDay, getAllPrayers} = require('./controllers/prayerCtrl')

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log("Massive", err));

// ----------USER ENDPOINTS------------
app.post('/login', login)
app.post('/register', register)
app.get('/users', getAllUsers)

// ----------PRAYER ENDPOINTS------------
app.get('/prayers/type/:type', getPrayersByType)
app.get('/prayers/id/:id', getPrayersByID)
app.get('/prayers/category/:category', getPrayersByCategory)
app.get('/prayers/day/:day', getPrayersByDay)
app.get('/prayers', getAllPrayers)




app.listen(process.env.SERVER_PORT, () =>
  console.log(`listening on port ${process.env.SERVER_PORT}`)
);
