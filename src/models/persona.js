import { Schema, model } from "mongoose";

const personaSchema = new Schema({
    identificacion: {type: Number, required: true, unique: true},
    nombre:  {type: String, required: true},
    telefono: {type: String},
    login: {type: String, required: true, required: true},
    password: {type: String, required: true},
    
    rol: {
            type: String, 
            required: true, 
            enum : ['Activo','Inactivo'], 
            default: "Activo"
        },
    cargo: {
            type: String, 
            required: true, 
            enum : ['Activo','Inactivo'], 
            default: "Activo"
            },
    estado: {
                    type: String, 
                    required: true, 
                    enum : ['Activo','Inactivo'], 
                    default: "Activo"
            }


  //  rol: {type:Schema.Types.ObjectId, ref: 'roles',required: true}
},{ timestamps:true, versionKey:false}
);

export default model('personas', personaSchema)