import { Router } from 'express';
import { createEvent, deleteEvent, getEvents, updateEvent} from '../controllers/event';

const router = Router();

router.get('/', getEvents);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;