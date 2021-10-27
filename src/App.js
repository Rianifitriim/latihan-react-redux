import React, { useState } from "react";
import styled from "styled-components";

import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";
import { buyProduct, cancelProduct } from "./actions";
import { useDispatch } from "react-redux";

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  
  const [selectedItem, setSelectedItem] = useState(0);

  const [products, setProducts] = useState([
    {
      id: 1,
      stock: 10,
    },
    {
      id: 2,
      stock: 5,
    },
    {
      id: 3,
      stock: 15,
    },
  ]);
  const dispatch = useDispatch()
  const handleBuy = (product) => {
    const newProduct = []
    for (let index = 0; index < products.length; index++) {
      const currentProducts = products[index];
      if(currentProducts.id === product.id){
        currentProducts.stock = currentProducts.stock - 1
        newProduct.push(currentProducts)
      }else{
        newProduct.push(currentProducts)
      }
      
    }
  
    setProducts(newProduct) 
    dispatch(buyProduct())
  };

  const handleRemove = (product) => {
    setProducts((currentProducts) => {
      const updatedProducts = currentProducts.map((item) => {
        if (item.id === product.id) {
          item.stock += 1;
          return item;
        }

        return item;
      });

      return updatedProducts;
    });

    setSelectedItem((currentSelectedItem) => {
      return currentSelectedItem - 1;
    });
  };

  return (
    <React.Fragment>
      <Navbar item={selectedItem} />
      <ProductContainer>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.key}
              product={product}
              onBuy={() => handleBuy(product)}
              onCancel={() => handleRemove(product)}
            />
          );
        })}
      </ProductContainer>
    </React.Fragment>
  );
}

export default App;
