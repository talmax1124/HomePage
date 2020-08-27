const express = require('express')
const router = express.Router()
const cors = require('cors')
const axios = require('axios')

const COUNTRYCODE = 'pt'

router.use(cors())

router.get('/categories', (req, res) => {
  const categories = [
    { value: '', name: 'All' },
    { value: 'business', name: 'Business' },
    { value: 'entertainment', name: 'Entertainment' },
    { value: 'health', name: 'Health' },
    { value: 'science', name: 'Science' },
    { value: 'sports', name: 'Sports' },
    { value: 'technology', name: 'Technology' }
  ]

  res.status(200).json(categories)
})

router.get('/:cat/:key', (req, res) => {
  const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=da37863321d8485b9b412f174f8b3ce4`

  axios(url)
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((err) => {
      res.status(500).send('Error retrieving news')
    })
})

router.get('/:key', (req, res) => {
  const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=da37863321d8485b9b412f174f8b3ce4`

  axios(url)
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((err) => {
      res.status(500).send('Error retrieving news')
    })
})

module.exports = router
