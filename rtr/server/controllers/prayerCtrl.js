function getPrayersByType(req, res){
  const db = req.app.get('db')
  
  db.get_prayers_by_type(req.params.type)
  .then(response =>  res.status(200).send(response))
  .catch(err => res.status(500).send(err))
}

function getPrayersByID(req, res){
  const db = req.app.get('db')
  
  db.get_prayers_by_type(+req.params.id)
  .then(response =>  res.status(200).send(response))
  .catch(err => res.status(500).send(err))
}

function getPrayersByCategory(req, res){
  const db = req.app.get('db')
  
  db.get_prayers_by_category(req.params.category)
  .then(response =>  res.status(200).send(response))
  .catch(err => res.status(500).send(err))
}

function getPrayersByDay(req, res){
  const db = req.app.get('db')
  
  db.get_prayers_by_day(req.params.day)
  .then(response =>  res.status(200).send(response))
  .catch(err => res.status(500).send(err))
}

function getAllPrayers(req, res){
  const db =req.app.get('db')

  db.get_prayers()
  .then(response =>  res.status(200).send(response))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getPrayersByType,
  getPrayersByID,
  getPrayersByDay,
  getPrayersByCategory,
  getAllPrayers
}