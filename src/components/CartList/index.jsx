import Cart from "../Cart"
import { useEffect } from "react"
import { CardListStyle } from "./style"

function CartList({currentSale, setCurrentSale, cartTotal, setCartTotal}){
    
    useEffect(()=>{
        setCartTotal(currentSale.map(item=>item.price).reduce((p, c)=> parseFloat(p)+ parseFloat(c), 0))
      }, [currentSale, setCartTotal])
    
    function removeAll(event){
        event.preventDefault()
        setCurrentSale([])
    }

    
    return(
        <CardListStyle>
        <div className="container-carrinho">
            <span className="header-carrinho">Carrinho de compras</span>
            <div className="container-cards-carrinho">
            {currentSale?.map((item)=><Cart 
                key={item.id} 
                id={item.id} 
                name={item.name} 
                category={item.category} 
                price={item.price} 
                img={item.img} 
                quant={item.quant} 
                currentSale={currentSale} 
                setCurrentSale={setCurrentSale} 
                cartTotal={cartTotal} 
                setCartTotal={setCartTotal}
            />)}
            </div>
            <div className="container-total-carrinho">
                <div>
                    <span>Total</span>
                    <p>{cartTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </div>
                <button onClick={removeAll}>Remover todos</button>
            </div>
        </div>
        </CardListStyle>
    )
    
}

export default CartList