import { Request, Response } from "npm:express@4.18.2";
import ContactoModel from "../db/Contacto.ts";

const getContactos = async (req: Request, res: Response) => {
    try {
        const contacto = await ContactoModel.findOne().exec();
        res.status(200).send({
            nombre:contacto.nombre,
            dni:contacto.dni
        });
      } catch (error) {
        res.status(404).send(error.message);
        return;
      }
    };
    export default getContactos;