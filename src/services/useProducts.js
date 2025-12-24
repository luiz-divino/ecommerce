import React from "react";
import { useState, useEffect } from "react";

export function useProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let Api = "https://fakestoreapi.com/products/1";
        async function fetchProducts() {
            try {
                await fetch(Api)
                    .then((response) => response.json())
                    .then((data) => {
                        setProducts(data);
                        console.log(data);
                    })
            } catch (error) {
                console.log('erro ao buscar', error);
            }
        }
        fetchProducts();
    }, [])
    return { products };
       
}