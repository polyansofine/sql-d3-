const env = process.env;

const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || "http://80.237.47.16",
    // host: env.DB_HOST || "localhost",
    user: env.DB_USER || "root",
    password: env.DB_PASSWORD || "",
    database: env.DB_NAME || "db",
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
