
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable("users", column => {
      column.increments();
      column.string("name", 100)
      column.string("email", 100)
      column.string("username", 32).notNullable().unique();
      column.string("password", 32).notNullable();
    })
    .createTable("children", column => {
      column.increments();
      column.string("name", 100).notNullable();
      column
        .integer("parentId")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("months", column => {
      column.increments();
      column.string("monthName", 100).notNullable();
      column
        .integer("childId")
        .unsigned()
        .references("id")
        .inTable("children")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("weeks", column => {
      column.increments();
      column
        .integer("monthsId")
        .unsigned()
        .references("id")
        .inTable("months")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("days", column => {
      column.increments();
      column
        .integer("weeksId")
        .unsigned()
        .references("id")
        .inTable("weeks")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("food", column => {
      column.increments();
      column.string("foodName", 100)
      column.string("mealTime", 12)
      column
        .integer("daysId")
        .unsigned()
        .references("id")
        .inTable("days")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("children")
    .dropTableIfExists("months")
    .dropTableIfExists("weeks")
    .dropTableIfExists("days")
    .dropTableIfExists("food")
};
