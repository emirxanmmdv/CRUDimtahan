import React, { useState } from 'react'
import axios from "axios"


const AddPage = () => {
    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [info, setInfo] = useState()
    const [price, setPrice] = useState()

    const AddProduct = async ()=>{
        const response = axios.post("http://localhost:3000/produkt/",{
            name: name,
            image: image,
            info: info,
            price: price
        })
    }
    return (
        <div>
            <form action="">
            <input type='text' placeholder='product name here...' onChange={(e)=>setName(e.target.value)}/>
            <input type='text' placeholder='image here ...' onChange={(e)=>setImage(e.target.value)}/>
            <input type='text' placeholder='product details here...'  onChange={(e)=>setInfo(e.target.value)}/>
            <input type='number' placeholder='price here...'  onChange={(e)=>setPrice(e.target.value)}/>
            <button onClick={AddProduct}>ADD</button>
            </form>
        </div>
    )
}

export default AddPage
