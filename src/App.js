import './App.css';
import { Provider } from 'react-redux'
import store from './store';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ADD from './components/ADD';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
       <Provider store={store}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ADD' element={<ADD />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
