import mysql from "serverless-mysql";

export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
  },
});

export async function sql_query(queryString, values) {
  try {
    const results = await db.query(queryString, values);
    await db.end();
    return results;
  } catch (error) {
    throw new Error(error.message);
  }
}

// sql_query("SELECT * FROM Tour")
