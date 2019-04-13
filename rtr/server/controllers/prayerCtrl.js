function getPrayers(req, res){
  const db = req.app.get('db')
  
  db.get_prayers_by_type(req.params.type)
  .then(response =>  res.status(200).send(response))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getPrayers
}