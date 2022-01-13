import { sql_query } from "../../../lib/db";

async function handler(req, res) {
  const tourId = req.query.tourId;

  if (req.method === "POST") {
    const name = req.body.name;
    const email = req.body.email;
    const comment = req.body.comment;

    const newReview = {
      name,
      email,
      comment,
    };

    try {
      const results = await sql_query(
        `INSERT INTO Review (UserID, HoTen, Email, TourID, DanhGia, NoiDung) VALUES('1', '${name}', '${email}','${tourId}','5','${comment}')`
      );
      
      // console.log(results);
      return res.json(results);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // If req.method === 'GET' -> Get the reviews for specific tour
  else {
    try {
      const results = await sql_query(
        `SELECT * FROM Review WHERE TourID = ?`,
        tourId
      );

      // console.log(results);
      return res.json(results);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default handler;
