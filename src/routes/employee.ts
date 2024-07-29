import { getEmployees, getEmployee, deleteEmployee, saveEmployee, updateEmployee} from '../controllers/employee';
import { Router } from "express";

const router = Router ();

router.get ('/', getEmployees);
router.get ('/:id', getEmployee);

router.delete ('/:id', deleteEmployee);

router.post ('/', saveEmployee)

router.put ('/:id', updateEmployee)



export default router;  