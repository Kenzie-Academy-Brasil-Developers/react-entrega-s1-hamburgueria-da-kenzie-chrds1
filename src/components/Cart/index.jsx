import React from "react"
import { CartStyle } from "./style"

function Cart({id, name, category, price, img, currentSale, setCurrentSale, cartTotal, setCartTotal}){
    
    function removeCart(event){
        const filter = currentSale?.filter((item)=> item.id !== +event.target.id)
        setCurrentSale(filter)
    }
    
    return(
        <CartStyle>
        <div className="container-cart">
            <div className="container-img-cart">
                <img src={img} alt={name}/>
            </div>
            <div className="container-name">
                <h3>{name.length > 10? name.slice(0, 10)+"...": name}</h3>
                <span>{category}</span>
            </div>
            <div className="container-price">
                <span onClick={removeCart} id={id}>Remover</span>
                <p>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </div>
        </div>
        </CartStyle>
    )
}

export default Cart