
import connect from "../../utils/database";

export default async (req,res) => {
  if (req.method === "POST") {
    const { name, email, clinicName, specialty, keyAct, image } = req.body;
    if (!name || !email || !clinicName || !specialty || !keyAct || !image) {
      res.status(400).json({ error: "Falta alguma informação" });
      return;
    } else {
      const { db } = await connect();
      const response = await db.collection("Doctor").insertOne({
        name,
        email,
        clinicName,
        specialty,
        keyAct,
        image,
      });

      res.status(200).json(response.ops[0]);
    }
  } else {
    res.status(400).json({ error: "Error" });
  }
};