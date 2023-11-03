import mongoose from "npm:mongoose@7.6.3";
import { Contacto } from "../type.ts";

const Schema = mongoose.Schema;

const contactoSchema = new Schema(
  {
    dni: { type: String, required: true, unique:true },
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    codpostal:{ type:String, required:true},
    codiso:{type:String,required:true}
  },
  { timestamps: true }
);

export type ContactoModelType = mongoose.Document & Omit<Contacto, "id">;

export default mongoose.model<ContactoModelType>("Contacto", contactoSchema);