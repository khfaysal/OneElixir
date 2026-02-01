import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        // Calling your actual Node.js server
        const res = await axios.get('http://localhost:5000/api/perfumes');
        setPerfumes(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching OneElixir collection:", err);
        setLoading(false);
      }
    };

    fetchPerfumes();
  }, []);

  if (loading) return <div style={loaderStyle}>Elevating your senses...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <header style={headerStyle}>
        <h2 style={{ letterSpacing: '5px' }}>THE COLLECTION</h2>
        <p>Curated scents for the modern soul.</p>
      </header>

      <div className="product-grid">
        {perfumes.length > 0 ? (
          perfumes.map((p) => (
            <div key={p._id} className="card">
              <Link to={`/product/${p._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={imageWrapper}>
                  <img src={p.image} alt={p.name} style={imageStyle} />
                </div>
                <h3 style={productTitle}>{p.name}</h3>
                <p style={productPrice}>${p.price}</p>
              </Link>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>
            No elixirs found. Add some from the Admin panel!
          </p>
        )}
      </div>
    </div>
  );
};

// Internal Styles for Home Page
const headerStyle = {
  textAlign: 'center',
  margin: '40px 0',
  textTransform: 'uppercase'
};

const imageWrapper = {
  overflow: 'hidden',
  backgroundColor: '#f9f9f9',
  marginBottom: '15px'
};

const imageStyle = {
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  transition: 'transform 0.5s ease'
};

const productTitle = {
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '5px'
};

const productPrice = {
  color: '#666',
  fontSize: '16px'
};

const loaderStyle = {
  height: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem',
  letterSpacing: '2px'
};

export default Home;