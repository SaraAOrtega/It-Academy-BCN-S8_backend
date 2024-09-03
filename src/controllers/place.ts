import { Request, Response } from 'express';
import Place from '../models/place';

export const getPlaces = async (req: Request, res: Response) => {
    try {
        console.log('Intentando obtener lugares...');
        const places = await Place.findAll();
        console.log('Lugares obtenidos:', places);
        res.json(places);
    } catch (error: unknown) {
        console.error('Error detallado al obtener lugares:', error);
        
        if (error instanceof Error) {
            res.status(500).json({ 
                message: 'Error al obtener lugares',
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        } else {
            res.status(500).json({ 
                message: 'Error desconocido al obtener lugares'
            });
        }
    }
};

// Añade otros métodos del controlador aquí (create, update, delete, etc.)