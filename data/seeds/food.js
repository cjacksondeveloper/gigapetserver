
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {id: 1, foodName: "Pizza"},
        {id: 2, foodName: "Baby Food"},
        {id: 3, foodName: "Pancakes"},
        {id: 4, foodName: "Salad"},
        {id: 5, foodName: "Chicken"},
        {id: 6, foodName: "Pancakes"},
      ]);
    });
};
