import Product from "../Product"
import { ProductsListStyle } from "./style"

function ProductsList({products, currentSale, setCurrentSale}){

    return(
        <ProductsListStyle>
            <div className="container-products">
                {products?.map((item)=><Product key={item.id} id={item.id} name={item.name} category={item.category} price={item.price} img={item.img} currentSale={currentSale} setCurrentSale={setCurrentSale}/>)}
            </div>
        </ProductsListStyle>
    )

}
export default ProductsList