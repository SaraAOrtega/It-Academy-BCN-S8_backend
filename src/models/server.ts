import express, {Application, Request, Response} from 'express'; 
import cors from 'cors'; 
import routesEmployeed from '../routes/employee'; 
import routesPlaces from '../routes/place'; 

import db from '../db/connection';


class Server {
    private app: Application; 
    private port:string; 

    constructor(){
     
        this.app = express(); 
        this.port = process.env.PORT || '3001';
        this.listen (); 
        this.midlewares (); 
        this.routes ();
        this.dbConnect(); 


    }

    listen (){
        this.app.listen (this.port, ()=>{
            console.log (`Aplicación corriendo en puerto ${this.port}`)
        })
    }

    routes (){
        this.app.get ('/', (req: Request, res: Response) => {
            res.json ({
                msg: "Api working"
            })
        })

        this.app.use ('/api/employees', routesEmployeed)
        this.app.use ('/api/places', routesPlaces)
    }

    midlewares (){
        this.app.use (express.json());

        this.app.use(cors());
    }

    async dbConnect (){

        try {
            await db.authenticate (); 
            console.log ('Base de datos conectada')
        } catch (error){
            console.log ('error al conectarse a la base de datos')
        }
    }

}
export default Server