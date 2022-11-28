import './App.css';
import { Provider } from 'react-redux'
import store from './store';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
