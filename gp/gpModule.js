const db = require("../data/dbConfig.js");

module.exports = {
  add,
  addChild,
  getChildren,
  addFood,
  findFood,
  findChildId,
  findUser,
  findAllByFilter,
  findById,
  getFoods
};

function findUser() {
  return db("users").select("id", "username", "password", "email");
}

function findAllByFilter(table, filter) {
  return db(`${table}`).where(filter);
}

function findById(table, id) {
  return db(`${table}`)
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById("users", id);
}

async function addChild(request) {
  const [id] = await db("children").insert(request);
  return findById("children", id).select("fullName");
}

function getChildren(parentId) {
  return db("children")
    .select("fullName")
    .where("parentId", parentId);
}

function getFoods(parentId, date) {
  return db("food")
    .select(
      "children.fullName",
      "food.foodName",
      "food.date",
      "food.mealTime",
      "food.foodType"
    )
    .where("date", date)
    .andWhere("parentId", parentId)
    .join("children", "children.Id", "=", "food.childId");
}

function addFood(parentId, fullName) {
  return db("children_food");
}

function findFood(foodName) {
  return db("food").where("foodName", foodName);
}

function findChildId(parentId, fullName) {
  return db("children")
    .where("fullName", fullName)
    .andWhere("parentId", parentId)
    .first()
}

async function addFood(childId, foodType, foodName, date, mealTime) {
  const [id] = await db("food").insert(
    {
      childId: childId,
      foodType: foodType,
      foodName: foodName,
      date: date,
      mealTime: mealTime
    }
  )
  return findById("food", id)
}