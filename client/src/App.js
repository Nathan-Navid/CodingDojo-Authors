import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigate from './Components/Navigate';
import Home from './Components/Home';
import AddAuthor from './Components/AddAuthor';
import './App.css';
import UpdateAuthor from './Components/UpdateAuthor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigate />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddAuthor />} />
          <Route path='/edit/:id' element={<UpdateAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
