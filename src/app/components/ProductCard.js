// src/components/ProductCard.js
export default function ProductCard({ product }) {
    return (
      <div style={styles.card}>
        <img src={product.image} alt={product.title} style={styles.image} />
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.price}>₹{product.price}</p>
      </div>
    );
  }
  
  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '1rem',
      backgroundColor: '#fff',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      maxWidth: '250px',
      margin: '1rem',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'contain',
      marginBottom: '1rem',
    },
    title: {
      fontSize: '16px',
      marginBottom: '0.5rem',
    },
    price: {
      color: '#2e7d32',
      fontWeight: 'bold',
      fontSize: '18px',
    },
  };
  