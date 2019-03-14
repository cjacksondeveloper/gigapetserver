
exports.seed = function(knex, Promise) {
  return knex('food').truncate()
    .then(function () {
      return knex('food').insert([
        {id: 1, foodName: "Salad", foodType: "Vegetable", mealTime:"Breakfast", childId: 1, date: "03_12_2019"},
        {id: 2, foodName: "Oranges", foodType: "Fruit", mealTime:"Lunch", childId: 1, date: "03_12_2019"},
        {id: 3, foodName: "Chicken", foodType: "Meat", mealTime:"Dinner", childId: 1, date: "03_12_2019"},
        {id: 4, foodName: "Salad", foodType: "Vegetable", mealTime:"Breakfast", childId: 1, date: "03_13_2019"},
        {id: 5, foodName: "Oranges", foodType: "Fruit", mealTime:"Lunch", childId: 1, date: "03_13_2019"},
        {id: 6, foodName: "Chicken", foodType: "Meat", mealTime:"Dinner", childId: 1, date: "03_13_2019"},
        {id: 7, foodName: "Salad", foodType: "Vegetable", mealTime:"Breakfast", childId: 2, date: "03_12_2019"},
        {id: 8, foodName: "Oranges", foodType: "Fruit", mealTime:"Lunch", childId: 2, date: "03_12_2019"},
        {id: 9, foodName: "Chicken", foodType: "Meat", mealTime:"Dinner", childId: 2, date: "03_12_2019"},
        {id: 10, foodName: "Salad", foodType: "Vegetable", mealTime:"Breakfast", childId: 2, date: "03_13_2019"},
        {id: 11, foodName: "Oranges", foodType: "Fruit", mealTime:"Lunch", childId: 2, date: "03_13_2019"},
        {id: 12, foodName: "Chicken", foodType: "Meat", mealTime:"Dinner", childId: 2, date: "03_13_2019"},
        {id: 13, foodName: "Salad", foodType: "Vegetable", mealTime:"Breakfast", childId: 3, date: "03_12_2019"},
        {id: 14, foodName: "Oranges", foodType: "Fruit", mealTime:"Lunch", childId: 3, date: "03_12_2019"},
        {id: 15, foodName: "Chicken", foodType: "Meat", mealTime:"Dinner", childId: 3, date: "03_12_2019"},
        {id: 16, foodName: "Salad", foodType: "Vegetable", mealTime:"Breakfast", childId: 3, date: "03_13_2019"},
        {id: 17, foodName: "Oranges", foodType: "Fruit", mealTime:"Lunch", childId: 3, date: "03_13_2019"},
        {id: 18, foodName: "Chicken", foodType: "Meat", mealTime:"Dinner", childId: 3, date: "03_13_2019"},
        {id: 19, foodName: "Salad", foodType: "Vegetable", mealTime:"Breakfast", childId: 4, date: "03_12_2019"}
      ]);
    });
};
