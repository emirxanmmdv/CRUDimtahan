import express from 'express';
import { DeleteAllProducts, GetAllProducts, PostAllProducts } from '../Controllers/productController.js';
const router = express.Router()
router.get("/",GetAllProducts)
router.post("/",PostAllProducts)
router.delete("/:id",DeleteAllProducts)
export default router


