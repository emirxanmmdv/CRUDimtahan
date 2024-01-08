import React, { useEffect, useState } from 'react'
import axios from "axios"

const Home = () => {
    const [product, setProduct] = useState("")
    async function axiosData() {
        const response = await axios.get("http://localhost:3000/produkt/")
        setProduct(response.data)
    }
    useEffect(() => {
        axiosData()
    }, [])
    return (
        <>
        {
             product && product.map((item)=>(
                <>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.info}</p>
                    <img src={item.image} alt="" />
                
                </>
             ))
        }
        </>
           
        
    )
}

export default Home
