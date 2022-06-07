import React from "react"

function Cart({id, name, category, price, img, quant, currentSale, setCurrentSale, cartTotal, setCartTotal}){
    
    function removeCart(event){
        const filter = currentSale?.filter((item)=> item.id !== +event.target.id)
        setCurrentSale(filter)
    }
    
    return(
        <div>
            <div>
                <img src={img} alt={name}/>
            </div>
            <div>
                <span>{name}</span>
                <span>{category}</span>
            </div>
            <span>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            <span>x{quant}</span>
            <span onClick={removeCart} id={id}>Remover</span>
        </div>
    )
}

export default Cart