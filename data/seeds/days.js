
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('days').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('days').insert([
        {id: 1, date: '3_11_2019'},
        {id: 2, date: '3_12_2019'},
      ]);
    });
};
