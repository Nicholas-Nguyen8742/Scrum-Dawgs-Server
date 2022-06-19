/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string('avatar_url').notNullable();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable().unique();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable("projects", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description").notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
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
      table.timestamp('updated_at').defaultTo(knex.fn.now());
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
