import { sql_query } from "../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const tourId = req.body.tourId;
    const name = req.body.enteredName;
    const phone = req.body.enteredPhone;
    const email = req.body.enteredEmail;
    const startDate = req.body.enteredStartDate;
    const finishDate = req.body.enteredFinishDate;
    const numberOfPeople = req.body.enteredNumberOfPeople;

    try {
      const results = await sql_query(
        `INSERT INTO Form (TourID, HoTen, SoDienThoai, Email, SoLuongNguoi, ThoiGianDi, ThoiGianDen) VALUES('${tourId}', '${name}', '${phone}', '${email}', '${numberOfPeople}', '${startDate}', '${finishDate}')`
      );

      return res.json(results);
    } catch (error) {
      res.status(500).json({ message: "Insert Form Failed!" });
    }
  }
}

export default handler;
