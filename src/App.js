import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Categories from './components/categories';
import BookView from './components/bookList';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          |
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
      <span>text</span>
      <BookView />
    </>
  );
}

export default App;
