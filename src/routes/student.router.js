import { Router } from 'express';
import {
  createStudentController,
  getStudentController,
  getAllStudentsController,
  updateStudentController,
  deleteStudentController,
} from '../controllers/student.controller.js';

const router = Router();

router.post('/create', createStudentController);
router.get('/:idNumber', getStudentController);
router.get('/', getAllStudentsController);
router.put('/:idNumber', updateStudentController);
router.delete('/:idNumber', deleteStudentController);

export default router;
