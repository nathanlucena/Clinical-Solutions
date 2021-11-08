import connect from "../../../utils/database";

export default async (req,res) => {
  if (req.method === "GET") {
    const { db } = await connect();
    const { name } = req.query;
    const a = name.toString();

    const response = await db
      .collection("Medical")
      .find({ $or: [{ name: RegExp(a, "gi") }, { email: name }] })
      .toArray();
    res.status(200).json(response);
  } else {
    res.status(400).json({ error: "Error" });
  }
};