import mongoose from "npm:mongoose@8.0.0";
import {Cliente} from "../types.ts";

const Schema = mongoose.Schema;

export type ClienteModelType = mongoose.Document;

const ClienteSchema = new Schema({
    name:{type: String, required: true},
    email:{type:String, required: true},
    orders: [{type: Schema.Types.ObjectId, ref: "Pedido"}],
});



export const ClienteModel = mongoose.model<ClienteModelType>("Cliente", ClienteSchema);