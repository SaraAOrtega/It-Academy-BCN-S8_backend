import { DataTypes } from "sequelize";
import db from '../db/connection'; 



const Employee = db.define ('Employee', {
    name:{
        type:DataTypes.STRING
    },
    lastName:{
        type:DataTypes.STRING
    },
    dni:{
        type:DataTypes.STRING
    },
    phone:{
        type:DataTypes.NUMBER
    },
    email:{
        type:DataTypes.STRING
    },
    team:{
        type:DataTypes.STRING
    },
    category:{
        type:DataTypes.STRING
    },
},{
        createdAt: false,
        updatedAt: false,

}); 

export default Employee;