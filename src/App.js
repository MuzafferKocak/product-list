import ProductList from "./components/Products/ProductList";
import Header from "./components/Header/Header";
import "./App.scss";
import { products, categories } from "./components/helper/data";
import { useState } from "react";

function App() {
  
  const [filteredProducts, setFilteredProducts] = useState(products); 

  const handleFilter = (category) => {
    //! Kategorilere göre ürünleri filtreleme ve filtrelenmiş ürünleri ayarla
    const filtered = category === "" ? products : products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  const handleSearch = (searchTerm) => {
    //! Arama işlemini gerçekleştir ve arama sonucuna göre ürünleri filtrele
    const filtered = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Header categories={categories} onFilter={handleFilter} onSearch={handleSearch} />
      <ProductList filteredProducts={filteredProducts} />
    </div>
  );
}

export default App;