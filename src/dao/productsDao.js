import Product from '../models/productModel.js'

const C = console.log.bind(console.log)
const productDAO={}
productDAO.getAll = async()=>{
    const products=await Product.find()
    return products
}

productDAO.getOne = async(barcodeProduct)=>{
    const product=await Product.findOne({barcode:barcodeProduct})
    return product
}

productDAO.insertProduct=async(product)=>{
    const productSaved=new Product(product)
    await productSaved.save()
    return true
}

productDAO.updateProduct=async(barcodeProduct,product)=>{
    const productUpdated=await Product.findOneAndUpdate({barcode:barcodeProduct},product)
    if(productUpdated!=null){
        return true
    }else{
        return false
    }

}

productDAO.deleteProduct=async(barcodeProduct)=>{
    const productDeleted=await Product.findOneAndDelete({barcode:barcodeProduct})
    if(productDeleted!=null){
        return true
    }else{
        return false
    }
}

export default productDAO;