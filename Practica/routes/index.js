const express=require('express')
const productcontroller=require('../controllers/Product')
const api = express.Router()

api.get('/Product',productcontroller.getProducts);

api.get('/Product/:ProductId',productcontroller.getProduct);

api.get('/Product',productcontroller.getRequestExtern);

api.post('/Product',productcontroller.postProduct);

module.exports =api