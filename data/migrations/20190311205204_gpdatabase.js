exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", column => {
      column.increments();
      column.string("fullName", 100);
      column.string("email", 100);
      column
        .string("username", 32)
        .notNullable()
        .unique();
      column.string("password", 32).notNullable();
    })
    .createTable("children", column => {
      column.increments();
      column.string("fullName", 100).notNullable();
      column
        .integer("parentId")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("food", column => {
      column.increments();
      column.string("foodName", 100).notNullable();
      column.string('foodType', 12).notNullable();
    })
    .createTable("children_food", column => {
      column.increments();
      column
      column.string("mealTime", 12);
      column.date("date", 24)
        .integer("foodId")
        .unsigned()
        .references("id")
        .inTable("food")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      column
        .integer("childId")
        .unsigned()
        .references("id")
        .inTable("children")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("children")
    .dropTableIfExists("food")
    .dropTableIfExists("children_food");
};
