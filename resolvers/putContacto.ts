import { Request, Response } from "npm:express@4.18.2";
import ContactoModel from "../db/Contacto.ts";

const putContacto = async (req: Request, res: Response) => {
  try {
    const { dni } = req.params;
    const { nombre,email,codiso,codpostal } = req.body;

    const updatedContacto = await ContactoModel.findOneAndUpdate(
      {dni},
      { nombre,email,codiso,codpostal },
      { new: true }
    ).exec();

    if (!updatedContacto) {
      res.status(404).send("Person not found");
      return;
    }
    res.status(200).send({
        nombre:updatedContacto.nombre,
        email:updatedContacto.email,
        codpostal:updatedContacto.codpostal,
        codiso:updatedContacto.codiso
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default putContacto;