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
router.get('/:id', md.checkAccountId, async (req, res, next) => {
  try {
    const { id } = req.params
    const account = await Account.getById(id)
    res.status(200).json(account)
  } catch (err) {
    next(err)
  }
})

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, async(req, res, next) => {
 try{
  const { name, budget } = req.body;
 const newAccount = await Account.create(
   {
    name: name.trim(),
    budget,
   }
 )
 res.status(201).json(newAccount)
 }catch(err){
   next(err)
 }
})

router.put('/:id', md.checkAccountId, md.checkAccountPayload, async (req, res, next) => {
  const updated = await Account.updateById(req.params.id)
  res.json(updated)
  try{
    res.json('update account')
  }catch(err){
    next(err)
  }
});

router.delete('/:id', md.checkAccountId, async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    await Account.deleteById(req.params.id)
    res.json(req.account)
  }catch(err){
    next(err)
  }
})
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message
  })  
})
module.exports = router;
