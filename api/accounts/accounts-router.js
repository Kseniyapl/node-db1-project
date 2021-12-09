const router = require('express').Router();
const Account = require('./accounts-model')
const md = require('./accounts-middleware')


router.get('/', async (req, res, next) => {
try{
const accounts = await Account.getAll()
res.json(accounts)
}catch(err){
  next(err)
}
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
   res.json(req.account)
})

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('post account')
  }catch(err){
    next(err)
  }
})

router.put('/:id', md.checkAccountId, md.checkAccountPayload, md.checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('update account by id')
  }catch(err){
    next(err)
  }
});

router.delete('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('delete account')
  }catch(err){
    next(err)
  }
})

module.exports = router;
