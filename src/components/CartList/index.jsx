import Cart from "../Cart"
import { useEffect } from "react"

function CartList({currentSale, setCurrentSale, cartTotal, setCartTotal}){
    
    useEffect(()=>{
        setCartTotal(currentSale.map(item=>item.price).reduce((p, c)=> parseFloat(p)+ parseFloat(c), 0))
      }, [currentSale])
    
    function removeAll(event){
        event.preventDefault()
        setCurrentSale([])
    }

    if(currentSale.length >0){
    return(
        <div>
            <span>Carrinho de compras</span>
            <div>
            {[...new Set(currentSale)]?.map((item)=><Cart key={item.id} id={item.id} name={item.name} category={item.category} price={item.price} img={item.img} currentSale={currentSale} setCurrentSale={setCurrentSale} cartTotal={cartTotal} setCartTotal={setCartTotal}/>)}
            </div>
            <div>
                <div>
                    <span>Total</span>
                    <span>{cartTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                </div>
                <button onClick={removeAll}>Remover todos</button>
            </div>
        </div>
    )
    }
}

export default CartList