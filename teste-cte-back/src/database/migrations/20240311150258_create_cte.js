/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("cte_nf", (table) => {
    table.increments("id").primary();
    table.string("uf").notNullable();
    table.string("ambiente").notNullable();
    table.string("nome_cte").notNullable();
    table.string("chave").notNullable();
    table.string("dt_cad").notNullable();
    table.string("hora_cad").notNullable();

    table.string("cnpj")
    table.foreign("cnpj").references("empresa.cnpj").onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("cte_nf");
};
