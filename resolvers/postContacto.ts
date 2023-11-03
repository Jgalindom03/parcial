import { Request, Response } from "npm:express@4.18.2";
import ContactoModel from "../db/Contacto.ts";

const postContacto = async (req: Request, res: Response) => {
  try {
    const { nombre, dni, email,codiso,codpostal } = req.body;
    if (!nombre || !dni || !email || !codiso || !codpostal ) {
      res.status(500).send("Nombre,dni,email,codpostal and codiso are required");
      return;
    }

    const siexiste = await ContactoModel.findOne({ dni }).exec();
    if (siexiste) {
      res.status(400).send("Contacto already exists");
      return;
    }

    const newContacto = new ContactoModel({ nombre, dni, email,codiso,codpostal});
    await newContacto.save();

    res.status(200).send({
      dni: newContacto.dni,
      nombre:newContacto.nombre,
      email:newContacto.email,
      codpostal:newContacto.codpostal,
      codiso:newContacto.codiso
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default postContacto;