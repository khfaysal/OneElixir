import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    scentProfile: '',
    image: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending data to the Express route we created in Step 7
      await axios.post('http://localhost:5000/api/perfumes', {
        ...formData,
        scentProfile: formData.scentProfile.split(',') // Convert string to array
      });
      alert('New Elixir added successfully!');
      setFormData({ name: '', price: '', description: '', scentProfile: '', image: '' });
    } catch (err) {
      console.error(err);
      alert('Error adding product');
    }
  };

  return (
    <div style={{ padding: '50px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Admin: Add New Elixir</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input type="text" placeholder="Perfume Name" value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} required />
        
        <input type="number" placeholder="Price ($)" value={formData.price} 
          onChange={(e) => setFormData({...formData, price: e.target.value})} required />
        
        <textarea placeholder="Description" value={formData.description} 
          onChange={(e) => setFormData({...formData, description: e.target.value})} />
        
        <input type="text" placeholder="Scent Profile (e.g. Woody, Floral)" value={formData.scentProfile} 
          onChange={(e) => setFormData({...formData, scentProfile: e.target.value})} />
        
        <input type="text" placeholder="Image URL" value={formData.image} 
          onChange={(e) => setFormData({...formData, image: e.target.value})} />
        
        <button type="submit" style={btnStyle}>UPLOAD TO COLLECTION</button>
      </form>
    </div>
  );
};

const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const btnStyle = { backgroundColor: '#000', color: '#fff', padding: '15px', cursor: 'pointer', border: 'none' };

export default Admin;