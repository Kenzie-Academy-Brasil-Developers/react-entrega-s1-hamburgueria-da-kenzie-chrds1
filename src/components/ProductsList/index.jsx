import Product from "../Product"
import { ProductsListStyle } from "./style"

function ProductsList({products, currentSale, setCurrentSale, status, setStatus}){
    
    return(
        <ProductsListStyle>
            {status.mensagem !== ""? <div><span>{status.type}</span>{status.mensagem}</div>: ""}
            <div className="container-products">
                {products?.map((item)=><Product key={item.id} id={item.id} name={item.name} category={item.category} price={item.price} img={item.img} currentSale={currentSale} setCurrentSale={setCurrentSale} status ={status}  setStatus ={setStatus}/>)}
            </div>
        </ProductsListStyle>
    )

}
export default ProductsList