import { sql_query } from "../../../lib/db";

export async function handler(req, res) {
  const tourId = req.query.tourId;
//   const numberTourId = +tourId;

  try {
    const results = await sql_query(
      `SELECT * FROM Tour WHERE TourID = ?`,
      tourId
    );
    // console.log(results);
    return res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default handler;
