import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useProductsFetch} from './Hooks/useProductsFetch';
import {GlobalStyle} from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home'
import Cart from './components/Cart'
import axios from 'axios';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [promo, setPromo] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const {products} = useProductsFetch();

  console.log(products)

  const submitOrder = () => {
      axios.post('http://localhost:3001/api/insert',{
        order_items: cart.map((item) => (
            `${item.name}`
        )).join(', '),
        promocode: promo,
        amount: count.toFixed(2),
        quantity : cart.length
      })

      alert('Order placed')
  }

  const submitContact = () => {
    axios.post('http://localhost:3001/api/contact',{
      full_name: name,
      email: email,
    })
    alert('Thank You! We will contact you soon')
  }

  const totalCost = (cost) => {
    setCount(count + cost)
  }
  
  const addToCart = (product) => {
    setCart([...cart, {...product}]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
    setCount(cart.length < 1 ? 0: (count - productToRemove.cost));
  };

  return (
    <Router>
      <Header cart={cart}/>

      <Route exact path='/' element={Home}>
        <Home products={products} addToCart={addToCart} totalCost={totalCost}/>
      </Route>
      <Route path='/cart' element= {Cart}>
        <Cart cart={cart} removeFromCart={removeFromCart} submitOrder={submitOrder} totalCost={count} setPromo={setPromo}/>
      </Route>
      
      <Footer setName={setName} setEmail={setEmail} submitContact={submitContact}/>
      <GlobalStyle />
    </Router> 
  );
}

export default App;
