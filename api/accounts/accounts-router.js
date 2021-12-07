const router = require('express').Router();
const Account = require('./accounts-model')
const{
  errorHandling
} = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  console.log("get all accounts")
  Account.getAll()
  .then(accounts => {
    res.status(200).json(accounts)
  })
  .catch(err => {
    res.status(400).json({ message: err })
  })
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})
router.use(errorHandling);

module.exports = router;
