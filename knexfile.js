// Update with your config settings.
const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;
console.log(process.env);
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: "postgres://tmgxzvms:a_R-8WlnRTC38MfeLeVWF1lgEcKdo0mQ@berry.db.elephantsql.com/tmgxzvms",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
