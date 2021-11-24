import connect from '../../../utils/database';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { db } = await connect();
    const { email } = req.query;
    //const keyString = key.toString();
    const response = await db.collection('Doctor').findOne({ email: email });
    res.status(200).json(response);
    // } else if (req.method === 'PUT') {
    //   const {
    //     name,
    //     sexo,
    //     email,
    //     birthDate,
    //     cpf,
    //     rg,
    //     status,
    //     profession,
    //     phone,
    //     convenio,
    //     adress,
    //     anamnese,
    //   } = req.body;

    //   if (
    //     !name ||
    //     !sexo ||
    //     !email ||
    //     !birthDate ||
    //     !cpf ||
    //     !rg ||
    //     !status ||
    //     !profession ||
    //     !phone ||
    //     !convenio ||
    //     !adress
    //   ) {
    //     res.status(400).json({ error: 'Falta alguma informação' });
    //     return;
    //   }

    //   const { db } = await connect();

    //   await db
    //     .collection('Medical')
    //     .updateOne({ cpf: cpf }, { $set: { anamnese: anamnese, upsert: true } });
    //   res.status(200).json(anamnese);
    // }
  } else if (req.method === 'PUT') {
    const { email } = req.query;
    const { patients } = req.body;

    if (!email || !patients) {
      res.status(400).json({ error: 'Missing parameter on request body' });
      return;
    }

    const { db } = await connect();

    const patientDell = {
      email: patients[0].email,
    };

    await db
      .collection('Doctor')
      .updateOne(
        { email: email },
        { $pull: { patients: { email: patientDell.email } } }
      );
    res.status(200).json(patientDell);
  } else {
    res.status(400).json({ error: 'Error' });
  }
};
