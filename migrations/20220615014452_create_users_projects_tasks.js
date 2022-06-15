/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable().unique();
      table.string("profile").nullable();
    })
    .createTable("projects", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description").notNullable();
      table
        .integer("sponsorID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("tasks", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description").notNullable();
      table
        .integer("projectID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("assignedID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("tasks")
    .dropTable("projects")
    .dropTable("users");
};
