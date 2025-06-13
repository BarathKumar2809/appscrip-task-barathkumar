export default function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>₹{price}</p>
    </div>
  );
}
