import connect from "../../../utils/database";


export default async (req,res) => {
  if (req.method === "GET") {
    const { db } = await connect();
    const { email } = req.query;
    //const keyString = key.toString();
    const response = await db
      .collection("Doctor")
      .findOne({ email: email })
    res.status(200).json(response);
  } else {
    res.status(400).json({ error: "Error" });
  }
};