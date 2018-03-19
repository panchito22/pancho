const mongo=require('mongoose');

const Schema=mongo.Schema
const ProductSchema=Schema(
{
    name : String,
    picture : String,
    price:{type:Number,default:0},
    category: {type:String,enum:['computers','phones','accesories']},
    description:String
}
)


module.exports=mongo.model('Product',ProductSchema);