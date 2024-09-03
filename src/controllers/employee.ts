import { Request, Response } from "express";
import Employee from "../models/employee";


export const getEmployees = async (req: Request, res: Response) =>{
    const listEmployee = await Employee.findAll ();
    res.json (listEmployee);

}

export const getEmployee = async(req: Request, res: Response) =>{
    const {id}= req.params;
    const employee = await Employee.findByPk(id)

    if (employee) {
        res.json (employee)
    } else {
        res.status(404).json ({
            msg: 'no existe un empleado con el id ${id}'
        })  
    }

}

export const deleteEmployee = async(req: Request, res: Response) =>{
    const {id}= req.params;
    const employee = await Employee.findByPk(id)

    if (!employee){
        res.status(404).json ({
            msg: 'no existe el empleado con el id ${id}'
        })

    } else {
        employee.destroy ();
        res.json ({
            msg: 'empleado eliminado con éxito'
        })
    }
    
}

export const saveEmployee = async (req: Request, res: Response) =>{
    const {body}= req;

    try {
        await Employee.create (body)
   
        res.json ({
            msg: 'Empleado agregado con exito', 
           
        })

    }catch (error) {
        console.log (error);
        res.json ({
            msg: 'Uppsss'
        })
        }

    }

   
    

export const updateEmployee = async (req: Request, res: Response) =>{
    const {body}= req;
    const {id}= req.params;

    

    try{
        const employee = await Employee.findByPk(id);
   
    if (employee){
        await employee.update(body); 
        res.json ({
            msg: 'Empleado actualizdo con éxito',
        })
    }else {
        res.status(404).json ({
        msg: 'no existe un producto con el id ${id}'

    }) 
    }

}  catch (error) {
            console.log (error);
            res.json ({
                msg: 'Uppsss'
            })
            }
    
        }
    