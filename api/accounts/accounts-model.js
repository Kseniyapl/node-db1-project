const db = require('../../data/db-config.js');

 function getAll() {
  return db('accounts')
}

const getById = id => {
  return db('accounts').where('id', id).first()
}

const create = async account => {
  const [ id ] = await db('accounts').insert(account)
  const newAccount = await getById(id)
  return newAccount
}

const updateById = async (id, account) => {
  await db("accounts")
  .update(account)
  .where({ id: id })
const updatedAccount = await getById(id)
return updatedAccount
}

const deleteById = async (id) => {
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
