const db = require('../../data/db-config.js');

async function getAll() {
  const rows = await db('accounts')
    .select('name', 'budget')
  return rows;
}

const getById = id => {
  return db('accounts').where({id}).first()
}

const create = account => {
  const [id] = db('accounts').insert(account)
  return getById(id)
}

const updateById = (id, account) => {
  return db('accounts')
  .where(({id}))
  .update(account, '*')
}

const deleteById = id => {
  return db('accounts')
  .where({id})
  .del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
