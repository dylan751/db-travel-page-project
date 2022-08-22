import { sql_query } from "../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.enteredName;
    const phone = req.body.enteredPhone;
    const email = req.body.enteredEmail;
    const subject = req.body.enteredSubject;
    const message = req.body.enteredMessage;

    try {
      const results = await sql_query(
        `INSERT INTO Contact (UserID, HoTen, SoDienThoai, Email, ChuDe, ThongDiep) VALUES('4', '${name}', '${phone}', '${email}', '${subject}', '${message}')`
      );

      return res.json(results);
    } catch (error) {
      res.status(500).json({ message: "Insert Form Failed!" });
    }
  }
}

export default handler;
