import React, { useState } from 'react';
import './App.css';
import AddProduct from './AddProduct';

function App() {
  const [inventory, setInventory] = useState([]);

  const handleAddProduct = (newProduct) => {
    setInventory((prevInventory) => [...prevInventory, newProduct]);}
    const handleQuantityChange = (index, amount) => {
      const updatedInventory = [...inventory];
      updatedInventory[index].quantity += amount;
      setInventory(updatedInventory);
  };

  return (
    <div className="App">
      <h1>Inventory System</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit</th>
           </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
             </tr>
          ))}
        </tbody>
      </table>
      <AddProduct onProductAdd={handleAddProduct} />
    </div>
  );
}

export default App;

