import React from 'react';

const Item = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div>
      <p>{item.name}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Item;