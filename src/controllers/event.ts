import { Request, Response } from 'express';
import Event from '../models/event';

export const getEvents = async (req: Request, res: Response) => {
    try {
        console.log('Intentando obtener eventos...');
        const events = await Event.findAll();
        console.log('Eventos obtenidos:', events);
        res.json(events);
    } catch (error: unknown) {
        console.error('Error detallado al obtener eventos:', error);
        
        if (error instanceof Error) {
            res.status(500).json({ 
                message: 'Error al obtener eventos',
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        } else {
            res.status(500).json({ 
                message: 'Error desconocido al obtener eventos'
            });
        }
    }
};

export const createEvent = async (req: Request, res: Response) => {
    try {
        console.log('Datos recibidos para crear evento:', req.body);
        const newEvent = await Event.create(req.body);
        console.log('Nuevo evento creado:', newEvent);
        res.status(201).json(newEvent);
    } catch (error: unknown) {
        console.error('Error al crear evento:', error);
        
        if (error instanceof Error) {
            res.status(400).json({ 
                message: 'Error al crear evento',
                error: error.message
            });
        } else {
            res.status(400).json({ 
                message: 'Error desconocido al crear evento'
            });
        }
    }
};

export const updateEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        console.log(`Intentando actualizar evento con id: ${id}`);
        console.log('Datos de actualización:', req.body);
        const [updated] = await Event.update(req.body, {
            where: { id_event: id }
        });
        if (updated) {
            const updatedEvent = await Event.findByPk(id);
            console.log('Evento actualizado:', updatedEvent);
            return res.json(updatedEvent);
        }
        throw new Error('Evento no encontrado');
    } catch (error: unknown) {
        console.error('Error al actualizar evento:', error);
        
        if (error instanceof Error) {
            res.status(400).json({ 
                message: 'Error al actualizar evento',
                error: error.message
            });
        } else {
            res.status(400).json({ 
                message: 'Error desconocido al actualizar evento'
            });
        }
    }
};

export const deleteEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        console.log(`Intentando eliminar evento con id: ${id}`);
        const deleted = await Event.destroy({
            where: { id_event: id }
        });
        if (deleted) {
            console.log('Evento eliminado exitosamente');
            return res.status(204).send();
        }
        throw new Error('Evento no encontrado');
    } catch (error: unknown) {
        console.error('Error al eliminar evento:', error);
        
        if (error instanceof Error) {
            res.status(400).json({ 
                message: 'Error al eliminar evento',
                error: error.message
            });
        } else {
            res.status(400).json({ 
                message: 'Error desconocido al eliminar evento'
            });
        }
    }
};