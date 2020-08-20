const express = require('express')
const routes = express.Router();

routes.get('/', (req, res) => {
  res.redirect('/instructors')
})


routes.get('/test', (req, res) => {
  res.send("ola")
})


routes.get('/', (req, res) => {
  res.render('/members')
})


module.exports = routes;