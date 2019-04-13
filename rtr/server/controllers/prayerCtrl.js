function getRosary(req, res){
  const db = req.app.get('db')

  db.get_rosary_prayers()
  .then(response =>  res.status(200).send(response))
  .catch(err => res.status(500).send(err))
}

function getDailyPrayers(req, res){
  const db = req.app.get('db')

  db.get_daily_prayers()
  .then(response => res.status(200).send(response))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getDailyPrayers,
  getRosary
}