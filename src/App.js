import { useProducts } from "./services/useProducts";

function App() {
  const { products } = useProducts();
  return (
    <div>
      <h1> E-commerce App</h1>
    </div>
  );
}

export default App;
