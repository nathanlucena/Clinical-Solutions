import connect from '../../utils/database';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, clinicName, specialty, keyAct, image, patients } =
      req.body;
    if (
      !name ||
      !email ||
      !clinicName ||
      !specialty ||
      !keyAct ||
      !image ||
      !patients
    ) {
      res.status(400).json({ error: 'Falta alguma informação' });
      return;
    } else {
      const { db } = await connect();
      const response = await db.collection('Doctor').insertOne({
        name,
        email,
        clinicName,
        specialty,
        keyAct,
        image,
        patients,
      });

      res.status(200).json(response.ops[0]);
    }
  } else if (req.method === 'PUT') {
    const { email, patients } = req.body;

    if (!email || !patients) {
      res.status(400).json({ error: 'Missing parameter on request body' });
      return;
    }

    const { db } = await connect();

    const newPatient = {
      name: patients[0].name,
      sexo: patients[0].sexo,
      email: patients[0].email,
      birthDate: patients[0].birthDate,
      cpf: patients[0].cpf,
      rg: patients[0].rg,
      status: patients[0].status,
      profession: patients[0].profession,
      phone: patients[0].phone,
      convenio: patients[0].convenio,
      anamnese: patients[0].anamnese,
      address: [
        {
          cep: patients[0].address.cep,
          street: patients[0].address.street,
          number: patients[0].address.number,
          state: patients[0].address.state,
          district: patients[0].address.district,
        },
      ],
    };
    await db
      .collection('Doctor')
      .updateOne(
        { email: email },
        { $addToSet: { patients: newPatient, upsert: true } }
      );
    res.status(200).json(patients);
  } else if (req.method === 'PUT') {
    const { email, patients } = req.body;

    if (!email || !emailP) {
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
