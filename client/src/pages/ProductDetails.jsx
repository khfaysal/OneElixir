import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // In a real app, you would fetch from: axios.get(`http://localhost:5000/api/perfumes/${id}`)
    // Using mock data for now:
    const mockProduct = {
      _id: id,
      name: id === '1' ? 'Oud Noir' : 'Rose Elixir',
      price: id === '1' ? 150 : 120,
      description: "A deep, mysterious blend designed for the bold.",
      scentNotes: "Top: Saffron | Heart: Rose | Base: Agarwood",
      image: 'https://placehold.co/400x500'
    };
    setProduct(mockProduct);
  }, [id]);

  if (!product) return <div>Loading Elixir...</div>;

  return (
    <div style={detailsContainerStyle}>
      <div style={imageSectionStyle}>
        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '4px' }} />
      </div>

      <div style={infoSectionStyle}>
        <h4 style={{ color: '#888', letterSpacing: '2px' }}>ONEELIXIR</h4>
        <h1 style={{ fontSize: '3rem', margin: '10px 0' }}>{product.name}</h1>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${product.price}</p>
        
        <hr style={{ margin: '30px 0', border: '0.5px solid #eee' }} />
        
        <p style={{ lineHeight: '1.6', color: '#444' }}>{product.description}</p>
        <p><strong>Notes:</strong> {product.scentNotes}</p>

        <button 
          onClick={() => addToCart(product)}
          style={addBtnStyle}
        >
          ADD TO COLLECTION
        </button>
      </div>
    </div>
  );
};

// Styles for a Luxury Brand Feel
const detailsContainerStyle = {
  display: 'flex',
  padding: '50px 10%',
  gap: '60px',
  alignItems: 'center'
};

const imageSectionStyle = { flex: 1 };
const infoSectionStyle = { flex: 1 };

const addBtnStyle = {
  marginTop: '40px',
  backgroundColor: '#000',
  color: '#fff',
  padding: '15px 40px',
  border: 'none',
  width: '100%',
  cursor: 'pointer',
  letterSpacing: '3px',
  fontWeight: 'bold',
  transition: '0.3s'
};

export default ProductDetails;