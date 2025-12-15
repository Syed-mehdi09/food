import express from 'express';
import { register, login } from '../controllers/deliveryController.js';

const deliveryRoutes = express.Router();

deliveryRoutes.post('/register', register);
deliveryRoutes.post('/login', login);

export default deliveryRoutes;