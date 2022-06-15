import './App.css';
import React, { useEffect, useState } from 'react';
import ProductsList from './components/ProductsList';
import { GlobalStyle, SectionStyle } from './styles/style';
import CartList from './components/CartList';


function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState({
    type: "",
    mensagem: ""
  })

  useEffect(()=>{
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then(response => response.json())
    .then(res => setProducts(res))
    .catch(erro => console.log(erro))
  }, [])

  function showProducts(event){
    event.preventDefault();

    setSearch(event.currentTarget.value)

    return search?.split("").length < 1
      ? 
      setFilteredProducts(products)
      : products.some(
          (product) => product.name.toLowerCase().includes(search.toLowerCase()) !== false)
      ? 
      setFilteredProducts(
          products.filter((product) =>product.name.toLowerCase().includes(search.toLowerCase())))
      : 
      setFilteredProducts(
          products.filter((product) =>product.category.toLowerCase().includes(search.toLowerCase())));
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <SectionStyle>
      <section className='container'>
        <header className='header-App'>
          <div className='logo'>
            <h1>Burguer</h1>
            <span>Kenzie</span>
          </div>
          <div className='container-Pesquisa'>
            <input onKeyUp={showProducts} placeholder='Digitar Pesquisa'/>
            <button onClick={showProducts}>Pesquisar</button>
          </div>
        </header>
        <main className='container-main'>
          <section className='container-produtos'>
            <ProductsList 
              products={filteredProducts.length > 0 && products? filteredProducts: products} 
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              status ={status}
              setStatus ={setStatus}
            />
          </section>
          <section className='container-cart'>
            <CartList 
              currentSale={currentSale} 
              setCurrentSale={setCurrentSale} 
              cartTotal={cartTotal} 
              setCartTotal={setCartTotal}
            />
          </section>
        </main>
      </section>
      </SectionStyle>
    </div>

    
  );
}

export default App;
