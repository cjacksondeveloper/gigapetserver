const db = require("../data/dbConfig.js");

module.exports = {
  add,
  addChild,
  getChildren,
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
  return findById("children", id).select("fullName")
}

function getChildren(parentId) {
  return db("children")
  .select("fullName")
  .where("parentId", parentId)
}

function getFoods(parentId, date) {
  return db("children_food")
  .select('children.fullName', 'food.foodName', "children_food.date", "children_food.mealTime")
  .where("date", date) 
  .andWhere("parentId", parentId)
  .leftJoin("food", "food.Id", '=', "children_food.foodId")
  .join("children", "children.Id", '=', "children_food.childId")
}