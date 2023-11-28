const knex = require("../db/connection");

function list() {
  return knex("suppliers").select("*");
}

function create(supplier) {
  return knex("suppliers")
    .insert(supplier)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

function read(supplierId) {
  return knex("suppliers").select("*").where({ supplier_id: supplierId }).first();
}

function update(updatedSupplier) {
  return knex("suppliers")
    .select("*")
    .where({ supplier_id: updatedSupplier.supplier_id })
    .update(updatedSupplier, "*");
}

function destroy(supplier_id) {
  return knex("suppliers").where({ supplier_id }).del();
}

module.exports = {
  list,
  create,
  read,
  update,
  destroy,
};