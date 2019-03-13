
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
        {id: 16, foodName: "Pancakes"},
        {id: 17, foodName: "Salad"},
        {id: 18, foodName: "Chicken",
        {id: 19, foodName: "Eggs", mealTime:"Breakfast", childId: 4, dayId: 1},
        {id: 20, foodName: "Salad", mealTime:"Lunch", childId: 4, dayId: 1},
        {id: 21, foodName: "Steak", mealTime:"Dinner", childId: 4, dayId: 1},
        {id: 22, foodName: "Eggs", mealTime:"Breakfast", childId: 4, dayId: 2},
        {id: 23, foodName: "Salad", mealTime:"Lunch", childId: 4, dayId: 2},
        {id: 24, foodName: "Steak", mealTime:"Dinner", childId: 4, dayId: 2},
        {id: 25, foodName: "Eggs", mealTime:"Breakfast", childId: 5, dayId: 1},
        {id: 26, foodName: "Salad", mealTime:"Lunch", childId: 5, dayId: 1},
        {id: 27, foodName: "Steak", mealTime:"Dinner", childId: 5, dayId: 1},
        {id: 28, foodName: "Eggs", mealTime:"Breakfast", childId: 5, dayId: 2},
        {id: 29, foodName: "Salad", mealTime:"Lunch", childId: 5, dayId: 2},
        {id: 30, foodName: "Steak", mealTime:"Dinner", childId: 5, dayId: 2},
        {id: 31, foodName: "Apple", mealTime:"Breakfast", childId: 6, dayId: 1},
        {id: 32, foodName: "Salad", mealTime:"Lunch", childId: 6, dayId: 1},
        {id: 33, foodName: "Steak", mealTime:"Dinner", childId: 6, dayId: 1},
        {id: 34, foodName: "Apple", mealTime:"Breakfast", childId: 6, dayId: 2},
        {id: 35, foodName: "Salad", mealTime:"Lunch", childId: 6, dayId: 2},
        {id: 36, foodName: "Steak", mealTime:"Dinner", childId: 6, dayId: 2},
        {id: 37, foodName: "Space Fruit", mealTime:"Breakfast", childId: 7, dayId: 1},
        {id: 38, foodName: "Space Vegetable", mealTime:"Lunch", childId: 7, dayId: 1},
        {id: 39, foodName: "Space Steak", mealTime:"Dinner", childId: 7, dayId: 1},
        {id: 40, foodName: "Space Fruit", mealTime:"Breakfast", childId: 7, dayId: 2},
        {id: 41, foodName: "Space Vegetable", mealTime:"Lunch", childId: 7, dayId: 2},
        {id: 42, foodName: "Space Steak", mealTime:"Dinner", childId: 7, dayId: 2},
        {id: 43, foodName: "Space Fruit", mealTime:"Breakfast", childId: 8, dayId: 1},
        {id: 44, foodName: "Space Vegetable", mealTime:"Lunch", childId: 8, dayId: 1},
        {id: 45, foodName: "Space Steak", mealTime:"Dinner", childId: 8, dayId: 1},
        {id: 46, foodName: "Space Fruit", mealTime:"Breakfast", childId: 8, dayId: 2},
        {id: 47, foodName: "Space Vegetable", mealTime:"Lunch", childId: 8, dayId: 2},
        {id: 48, foodName: "Space Steak", mealTime:"Dinner", childId: 8, dayId: 2},
      ]);
    });
};
