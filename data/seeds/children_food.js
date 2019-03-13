
exports.seed = function(knex, Promise) {
  return knex('children_food').truncate()
    .then(function () {
      return knex('children_food').insert([
        {id: 1, foodId: 1, mealTime:"Breakfast", childId: 1, date: "03_12_2019"},
        {id: 2, foodId: 1, mealTime:"Lunch", childId: 1, date: "03_12_2019"},
        {id: 3, foodId: 1, mealTime:"Dinner", childId: 1, date: "03_12_2019"},
        {id: 4, foodId: 1, mealTime:"Breakfast", childId: 1, date: "03_13_2019"},
        {id: 5, foodId: 1, mealTime:"Lunch", childId: 1, date: "03_13_2019"},
        {id: 6, foodId: 1, mealTime:"Dinner", childId: 1, date: "03_13_2019"},
        {id: 7, foodId: 2, mealTime:"Breakfast", childId: 2, date: "03_12_2019"},
        {id: 8, foodId: 2, mealTime:"Lunch", childId: 2, date: "03_12_2019"},
        {id: 9, foodId: 2, mealTime:"Dinner", childId: 2, date: "03_12_2019"},
        {id: 10, foodId: 2, mealTime:"Breakfast", childId: 2, date: "03_13_2019"},
        {id: 11, foodId: 2, mealTime:"Lunch", childId: 2, date: "03_13_2019"},
        {id: 12, foodId: 2, mealTime:"Dinner", childId: 2, date: "03_13_2019"},
        {id: 13, foodId: 3, mealTime:"Breakfast", childId: 3, date: "03_12_2019"},
        {id: 14, foodId: 4, mealTime:"Lunch", childId: 3, date: "03_12_2019"},
        {id: 15, foodId: 5, mealTime:"Dinner", childId: 3, date: "03_12_2019"},
        {id: 16, foodId: 3, mealTime:"Breakfast", childId: 3, date: "03_13_2019"},
        {id: 17, foodId: 4, mealTime:"Lunch", childId: 3, date: "03_13_2019"},
        {id: 18, foodId: 5, mealTime:"Dinner", childId: 3, date: "03_13_2019"},
        {id: 19, foodId: 6, mealTime:"Breakfast", childId: 4, date: "03_12_2019"}
      ]);
    });
};
