import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <>
        <Header />
        <main className='py-3'>
          <Container>
            <Router>
              <Routes>
                  <Route path='/' element={<HomeScreen />} exact />
                  <Route path='/product/:id' element={<ProductScreen />} />
              </Routes>
            </Router>
          </Container>
        </main>
      <Footer />

    </>
  );
}

export default App;
