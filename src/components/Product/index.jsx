import { ProductStyle } from "./styled"
import React, {useEffect, useState} from "react"

function Product({id, name, category, price, img, currentSale, setCurrentSale}){
    

    function addCart(){
        currentSale.length > 0
        ?
        setCurrentSale([...currentSale, {id, name, img, category, price}])
        :
        setCurrentSale([{id, name, img, category, price}])
    }

    return(
        <ProductStyle>
        <div className="card">
            <div className="container-img">
                <img src={img} alt={name} />
            </div>
            <div className="container-descricao">
                <h3>{name}</h3>
                <span>{category}</span>
                <span className="price">{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                <button onClick={addCart}>Adicionar</button>
            </div>
        </div>
        </ProductStyle>
    )

}
export default Product