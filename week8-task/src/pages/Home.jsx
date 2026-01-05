import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default Home;
