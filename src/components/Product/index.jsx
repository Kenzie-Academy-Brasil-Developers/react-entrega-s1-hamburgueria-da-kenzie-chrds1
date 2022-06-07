import { ProductStyle } from "./styled"
import React from "react"

function Product({id, name, category, price, img, currentSale, setCurrentSale, status, setStatus}){
    
    function addCart(event){
        if(currentSale.length === 0){
            setStatus({type: "",  mensagem: ""})
            setCurrentSale([{id, name, img, category, price}])
        } else if(currentSale.length > 0 && currentSale.find((el)=> el.name === event.target.id) === undefined){
            setStatus({type: "",  mensagem: ""})
            setCurrentSale([...currentSale, {id, name, img, category, price}]) 
        } else if(currentSale.length > 0 && currentSale.some((el)=> el.name === event.target.id)){
            setStatus({type: "Erro", mensagem: "Produto limitado a uma(01) unidade por CPF"})
        }   
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
                <button onClick={addCart} id={name}>Adicionar</button>
            </div>
        </div>
        </ProductStyle>
    )

}
export default Product