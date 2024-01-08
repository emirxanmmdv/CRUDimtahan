import express from 'express';
import dotenv from "dotenv"
import productRouter from './Routers/productRouter.js';
dotenv.config()
const app = express()
app.use(express.json())
const port = 3000
app.use("/produkt",productRouter)



const PASSWORD = process.env.PASSWORD
const URL = process.env.URL.replace("<password>", PASSWORD )
const PORT = process.env.PORT
mongoose.connect(URL)
  .then(() => console.log('Welcome stranger!'));
  
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})