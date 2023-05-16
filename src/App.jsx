import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Main from './components/Main'
import Cart from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState(JSON.parse(sessionStorage.getItem('neoflex_cart')) || []);

  useEffect(() => {
    const cart = sessionStorage.getItem('neoflex_cart');
    setCartItems(JSON.parse(cart));
  }, []);

  useEffect(() => {
    sessionStorage.setItem('neoflex_cart', JSON.stringify(cartItems));
  }, [cartItems])

  const handleAddToCart = (clickedItem) => {
    setCartItems((inCart) => {
      const isInCart = inCart.find((item) => item.id === clickedItem.id);

      if (isInCart) {
        return inCart.map((item) => {
          return item.id === clickedItem.id ? { ...item, qty: item.qty + 1 } : item;
        });
      }
      return [...inCart, { ...clickedItem, qty: 1 }];
    });
  }

  const handleRemoveFromCart = (id) => {
    setCartItems((inCart) => {
      return inCart.reduce((acc, item) => {
        if (item.id === id) {
          if (item.qty === 1) return acc;

          return [...acc, { ...item, qty: item.qty - 1 }];
        } else {
          return [...acc, item];
        }
      }, []);
    })
  }

  const handleRemoveAllById = (id) => {
    setCartItems((inCart) => {
      return inCart.filter((item) => item.id !== id);
    });
  }

  const getTotalItems = (items) => {
    return items.reduce((acc, item) => acc += item.qty, 0);
  }

  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/xelfoen-test/'}>
      <div className='container'>
        <Header quantity={getTotalItems(cartItems)} />
        <Routes>
          <Route
            path='/'
            element={<Main addToCart={handleAddToCart} />}
          />
          <Route
            path='/cart'
            element={
              <Section title='Корзина'>
                <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} removeAllById={handleRemoveAllById} />
              </Section>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
