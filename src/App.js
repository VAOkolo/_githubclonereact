import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import Layout from './layout';

function App() {
  return (
    <div className="App">

    <Routes> 
      <Route path='/' element={<Layout />}>  
          <Route path='/' element={<Home />} />
      </Route>
   
    </Routes> 

    </div>
  );
}

export default App;
