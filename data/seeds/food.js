
exports.seed = function(knex, Promise) {
  return knex('food').truncate()
    .then(function () {
      return knex('food').insert([
        {id: 1, foodName: "Salad", foodType: "vegetable", mealTime:"breakfast", childId: 1, date: "2019-03-12"},
        {id: 2, foodName: "Oranges", foodType: "fruit", mealTime:"lunch", childId: 1, date: "2019-03-12"},
        {id: 3, foodName: "Chicken", foodType: "meat", mealTime:"dinner", childId: 1, date: "2019-03-12"},
        {id: 4, foodName: "Salad", foodType: "vegetable", mealTime:"breakfast", childId: 1, date: "2019-03-13"},
        {id: 5, foodName: "Oranges", foodType: "fruit", mealTime:"lunch", childId: 1, date: "2019-03-13"},
        {id: 6, foodName: "Chicken", foodType: "meat", mealTime:"dinner", childId: 1, date: "2019-03-13"},
        {id: 7, foodName: "Salad", foodType: "vegetable", mealTime:"breakfast", childId: 2, date: "2019-03-12"},
        {id: 8, foodName: "Oranges", foodType: "fruit", mealTime:"lunch", childId: 2, date: "2019-03-12"},
        {id: 9, foodName: "Chicken", foodType: "meat", mealTime:"dinner", childId: 2, date: "2019-03-12"},
        {id: 10, foodName: "Salad", foodType: "vegetable", mealTime:"breakfast", childId: 2, date: "2019-03-13"},
        {id: 11, foodName: "Oranges", foodType: "fruit", mealTime:"lunch", childId: 2, date: "2019-03-13"},
        {id: 12, foodName: "Chicken", foodType: "meat", mealTime:"dinner", childId: 2, date: "2019-03-13"},
        {id: 13, foodName: "Salad", foodType: "vegetable", mealTime:"breakfast", childId: 3, date: "2019-03-12"},
        {id: 14, foodName: "Oranges", foodType: "fruit", mealTime:"lunch", childId: 3, date: "2019-03-12"},
        {id: 15, foodName: "Chicken", foodType: "meat", mealTime:"dinner", childId: 3, date: "2019-03-12"},
        {id: 16, foodName: "Salad", foodType: "vegetable", mealTime:"breakfast", childId: 3, date: "2019-03-13"},
        {id: 17, foodName: "Oranges", foodType: "fruit", mealTime:"lunch", childId: 3, date: "2019-03-13"},
        {id: 18, foodName: "Chicken", foodType: "meat", mealTime:"dinner", childId: 3, date: "2019-03-13"},
        {id: 19, foodName: "Salad", foodType: "vegetable", mealTime:"breakfast", childId: 4, date: "2019-03-12"}
      ]);
    });
};
