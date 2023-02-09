export default () => ({
    port: parseInt(process.env.PORT, 10) || 3333,
    database: {
      host: process.env.DATABASE_USER,
      port: parseInt(process.env.PORT, 10) || 5432
    }
  });

  export{}