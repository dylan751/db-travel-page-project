import { sql_query } from "../../lib/db";

async function handler(req, res) {
  try {
    const results = await sql_query("SELECT * FROM Product");
    return res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default handler;