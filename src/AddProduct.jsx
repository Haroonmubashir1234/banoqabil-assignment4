import React, { useState } from 'react';

const AddProduct = ({ onProductAdd }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('pcs');

  const handleAddProduct = () => {
    if (productName && quantity) {
      const newProduct = { name: productName, quantity: Number(quantity), unit };
      onProductAdd(newProduct);
      setProductName('');
      setQuantity('');
      setUnit('pcs');
     }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <label>
        Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <label>
        Unit:
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="pcs">pcs</option>
          <option value="kg">kg</option>
          <option value="liters">liters</option>
        </select>
      </label>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;