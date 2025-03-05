import React, { useState, useEffect } from 'react';
import Item from './Item';
import axios from 'axios';

const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(API_URI);
        setItems(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URI}/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        items.map((item) => (
          <Item key={item.id} item={item} onDelete={handleDelete} />
        ))
      )}
    </>
  );
};

export default ItemList;