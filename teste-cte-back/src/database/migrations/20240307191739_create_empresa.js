/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("empresa", (table) => {
      table.string("cnpj").notNullable();
      table.increments("id").primary();
      table.string("senha").notNullable();
      table.string("logomarca").notNullable();
      table.string("anexo_cert").notNullable();
      table.string("senha_cert").notNullable();
      table.string("nome_fantasia").notNullable();
      table.string("endereço").notNullable();
      table.string("numero").notNullable();
      table.string("bairro").notNullable();
      table.string("uf").notNullable();
      table.string("whatsapp").notNullable();
      table.string("email").notNullable();
      table.string("cidade").notNullable();
      table.string("contato").notNullable();
      table.string("email").notNullable();
      table.integer("login").checkLength(">=", 8);
  
      table.unique(["email"], {indexName: 'email_unique', useConstraint: true})
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable("empresa");
  }; 