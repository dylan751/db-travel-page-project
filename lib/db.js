import mysql from "serverless-mysql";

export const db = mysql({
  config: {
    host: "localhost",
    database: "db_travel_page_project",
    user: "root",
    password: "Khongbiet2001.",
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
