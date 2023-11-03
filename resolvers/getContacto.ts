import { Request, Response } from "npm:express@4.18.2";
import ContactoModel from "../db/Contacto.ts";

const getContacto = async (req: Request, res: Response) => {
    try {
    const { dni } = req.params;
    const contacto = await ContactoModel.findOne({dni}).exec();
    if (!contacto) {
      res.status(404).send("Contacto not found");
      return;
    }
      
      res.status(200).send({
            nombre:contacto.nombre,
            dni:contacto.dni,
            email:contacto.email,
            codpostal:contacto.codpostal,
            codiso:contacto.codiso
        });
      } catch (error) {
        res.status(404).send(error.message);
        return;
      }
    };
    export default getContacto;