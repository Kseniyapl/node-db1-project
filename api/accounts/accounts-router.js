const router = require('express').Router();
const Account = require('./accounts-model')
const{
  errorHandling
} = require('./accounts-middleware');
const { reset } = require('nodemon');

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
  try{
res.json('get account by id')
  }catch(err){
    next(err)
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('post account')
  }catch(err){
    next(err)
  }
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('update account by id')
  }catch(err){
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('delete account')
  }catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({message:err.message})
})
router.use(errorHandling);

module.exports = router;
