import { Route, Switch } from 'react-router-dom';

import './App.css';
import MainNav from './components/MainNav';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <div className='App'>
      <MainNav />
      <Switch>
        <Route path='/products/:productId'>
          <SingleProductPage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route path='/products'>
          <ProductsPage />
        </Route>
        <Route path='/cart'>
          <CartPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
