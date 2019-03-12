const db = require('../data/dbConfig.js');

module.exports = {
  add,
  findUser,
  findAllByFilter,
  findById,
};

function findUser() {
  return db('users').select('id', 'username', 'password', 'email');
}

function findAllByFilter(table, filter) {
  return db(`${table}`).where(filter);
}

function findById(table, id) {
  return db(`${table}`)
    .where({ id })
    .first();
}

// async function add(user) {
//   const [id] = await db(users).insert(user);
//   return findById('users', id);
// }

function add(user) {
  return db('users').insert(user);
}

