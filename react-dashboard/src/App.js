import logo from './files/logo.svg';
import './css/App.css';
import { Routes, Route } from "react-router-dom";
import List from './components/List'

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<List/>}/>
  </Routes>
  </>
  );
}

export default App;
