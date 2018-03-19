'use strict'

const Product = require('../models/Product');
const service = require('../service/restclient');

function getProducts(req,res){
    Product.find((err,products)=>{
        if(err)return res.status(500).send({message:'error en el servidor'});
        if(!products) return res.status(404).send({message:'el producto no existe'});
        res.status(200).send({products});
    }

    );
}

function getRequestExtern(req,res){
    service.getRequest("192.168.123.144:4000/computron/products",function(response){
        res.send(response)
    });
}



function postProduct(req,res){

    let product= new Product();
    product.name=req.body.name;
    product.picture=req.body.picture;
    product.price=req.body.price;
    product.category=req.body.category;
    product.description=req.body.description;
    console.log(product.body);

    product.save((err,productoStore)=>{
        if (err) res.status(500).send({message:'error en el servidor'});
        res.status(200).send({Product:productoStore})
            }
    );
}

function getProduct(req,res){
    let ProductId = req.params.ProductId
    Product.findById(ProductId,(err,Product)=>{
        if(err) return res.status(500).send({ message:'Error al realizar peticion'})
        if (!Product) return res.status(404).send({ message:'el producto no existe'})

        res.status(200).send({Product})
    })
}

module.exports={
    getProducts,
    postProduct,
    getProduct,
    getRequestExtern
}