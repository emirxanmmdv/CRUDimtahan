import { Imtahan } from "../Models/productSchema.js";

//  <----------- GET ----------->
export const GetAllProducts = async (req, res) => {
    const data = await Imtahan.find({}); 
    res.send(data)
}

//  <----------- POST ----------->
export const PostAllProducts = async (req, res) => {
    try {
      const newProduct = new Imtahan({...req.body});
      await newProduct.save();
      res.status(200).json({ message: "product added successfully!" });
      
    } catch (error) {
      res.status(500).json({message : "Zayi cixdi"})
    }
}

//  <----------- DELETE ----------->
export const DeleteAllProducts = async (req, res) => {
    try {
      const { id } = req.params
      const deleteProduct = await Imtahan.findByIdAndDelete(id);
      res.status(200).send({ message: "Product deleted successfully!" });
    } catch (error) {
      res.status(500).send("Coludn't delete product");
      
    }
  }
