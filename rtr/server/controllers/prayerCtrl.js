function getRosary(req, res){
  const db = req.app.get('db')

  db.get_rosary().then(response => console.log(response) || res.sendStatus(200))
  .catch(err => res.status(500).send(err))
}

function getDailyPrayers(req, res){
  const db = req.app.get('db')

  db.get_daily_prayers().then(response => console.log(response) || res.sendStatus(200))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getDailyPrayers,
  getRosary
}