import { Route, Routes } from 'react-router-dom';
import home from './components/home';
import categories from './components/categories';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={home} />
        <Route path="/categories" element={categories} />
      </Routes>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
