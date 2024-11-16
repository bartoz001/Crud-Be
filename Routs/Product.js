import express from 'express'
const router = express.Router()
import { addProduct ,updateProduct,deleteProduct,getProduct} from "../controlers/Product.js"

router.get('/getproduct/:user_id',getProduct)
router.post('/addproduct/:user_id',addProduct)
router.put('/updateProduct/:product_id',updateProduct)
router.delete('/deleteProduct/:product_id',deleteProduct)

export default router