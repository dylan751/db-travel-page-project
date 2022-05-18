import { sql_query } from '../../../lib/db';

const handler = async (req, res) => {
  try {
    const results = await sql_query(`SELECT * FROM Tour`);
    return res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default handler;