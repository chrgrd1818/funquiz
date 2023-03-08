//require("dotenv").config({ silent: true });

module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "production",

  // Environment-dependent settings
  development: {
    db: {
      dialect: "sqlite",
      storage: "db/db1.db"
    }
  },
  production: {
    db: {
      dialect: "sqlite",
      storage: "db/db1.db"
    }
  }
};
