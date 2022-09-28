module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 8889),
      database: env("DATABASE_NAME", "bienesraizes"),
      user: env("DATABASE_USERNAME", "jdvpl"),
      password: env("DATABASE_PASSWORD", "kakaroto"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
