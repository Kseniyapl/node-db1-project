const Account = require('./accounts-model');
const db =require('../../data/db-config');



exports.checkAccountPayload = (req, res, next) => {
  if(!req.body.name || !req.body.budget) {
    res.status(400).json({message: "name and budget are required"})
}
  else if (typeof req.body.name != 'string') {
    res.status(400).json({message: "name of account must be a string"})
  }
  else if(req.body.name.trim().length() < 3 || req.body.name.trim().length() >100){
    res.status(400).json({message: "name of account must be between 3 and 100"})
  }
  else if(typeof req.body.name != 'number'){
    res.status(400).json({message: "budget of account must be a number"})
  }
  else if(req.body.budget < 0 || req.body.budget > 1000000){
    res.status(400).json({message: "budget of account is too large or too small"})
  }
  else{
    next()
  }
}


exports.checkAccountNameUnique = async (req, res, next) => {
  try{
   const account = await db('accounts').where( 'name', req.body.name.trim())
    if(account){
      next(res.status(400).json({message: "that name is taken"}))
    }
    else{
      next()
    }
  }catch(error){
    next(error)
  }

exports.checkAccountId = async (req, res, next) => {
  try{
    const accountId = await Account.getById(req.params.id)
    if(accountId){
      req.account=accountId
    }
    else{
      next(res.status(400).json({message: "account not found"}))
    }
  }catch(error){
    next(error)
  }
}

exports.errorHandling = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: `Horror in the router: ${err.message}`,
    stack: err.stack,
  });
}
}