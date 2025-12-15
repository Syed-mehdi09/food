import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { acceptOrder, getOutForDeliveryOrders, listOrders, placeOrder, updateSatus, userOrders, verifyOrder } from '../controllers/orderController.js'


const orderRouter=express.Router()

orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddleware,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateSatus)
orderRouter.get("/out-for-delivery", getOutForDeliveryOrders);
orderRouter.post("/accept-order", acceptOrder);


export default orderRouter;