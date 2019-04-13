const bcrypt = require('bcryptjs')

async function login(req, res){
  const db = req.app.get('db')
  try {
    let user = await db.get_user(req.body.email)
    if(user[0]){
      let passwordMatch = await bcrypt.compare(req.body.password, user[0].password)
      console.log(user) || passwordMatch ? res.status(200).send(user[0]) : res.status(401).send(console.log("Wrong password"))
    }else{
     res.status(404).send(console.log("Email not registered"))
    }
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

async function register(req, res){
  const db = req.app.get('db')
  let { email, firstName, lastName } = req.body
  try {
    console.log(email)
    let user = await db.get_user(email)
    console.log('USER:', user)
    if(user[0]){
    res.status(422).send(console.log("Email already registered"))
    }
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }

  try {
    let hash = await bcrypt.hash(req.body.password, 10)
    console.log(firstName, lastName)
    let registeredUser = await db.register_user([firstName, lastName, email, hash])
    res.status(200).send(registeredUser[0])
  } catch (error) {
    return res.status(422).send(console.log("Couldn't register"))
  }
  
}

async function getAllUsers(req, res){
  const db = req.app.get('db')

  try {
    let users = await db.get_users()
    res.status(200).send(users)
  } catch (error) {
    return res.status(500).send(console.log("Couldn't get users"))
  }
}

module.exports = {
  register,
  login,
  getAllUsers
}