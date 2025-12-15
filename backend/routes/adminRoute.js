import express from 'express';
import { loginAdmin, registerAdmin } from '../controllers/adminController.js';

const adminRouter = express.Router();

// POST /api/admin/register
adminRouter.post('/register', registerAdmin);

// POST /api/admin/login
adminRouter.post('/login', loginAdmin);

export default adminRouter;
