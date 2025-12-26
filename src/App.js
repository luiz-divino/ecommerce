import { useState } from "react";
import { Card } from "./components/Card/Card";
import { useProducts } from "./services/useProducts";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) => (
    product.title.toLowerCase().includes(search.toLowerCase())
  ));

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />

      <main>
        {loading ? <p>Carregando...</p> :
          filteredProducts.map((product) => (
            <Card key={product.id} filteredProducts={product} />
          ))
        }
      </main>

    </div>
  );
}

export default App;
