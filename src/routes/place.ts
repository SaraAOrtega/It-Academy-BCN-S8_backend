import { Router } from 'express';
import { getPlaces} from '../controllers/place';

const router = Router();

router.get('/', getPlaces);

export default router;