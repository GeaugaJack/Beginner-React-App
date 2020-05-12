import React from 'react';
import NavBar from './NavBar';
import Greeter from './greeter';
import Counter from './Counter';
import MoodToggler from './MoodToggler';
import Cart from './Cart';
import './App.css';

const items = [
  { id: 1, name: 'Taco Seasoning', price: 2.25, qty: 2 },
  { id: 2, name: 'Pinto Beans', price: 1.99, qty: 3 },
  { id: 3, name: 'Sour Cream', price: 3.50, qty: 1 },
]




function App() {
  return (
    <div>
      <Cart initialItems={items} />
      <Counter step={5}/>
      <NavBar />
      <MoodToggler />
      <Greeter name ="Karen" age="62" excitement={4} />
      <Greeter name ="Rachel" excitement={2} />
      <h1>Hello from App!</h1>
    </div>
  );
}

export default App;
