import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom'
import { Home, Lander } from './pages'
import Layout from './layout';
import { useSelector } from 'react-redux';
import { Spinner } from './components';

import './App.css';
import './App.scss';
import './my-colors.scss'



function App() {
  const userObject = useSelector(state => state.userObject);
  const loading = useSelector(state => state.loading);


console.log('app pageloading value',loading )

  return (
    <div className="App">

    <Routes> 
      <Route path='/' element={<Layout />}>  
          <Route path="/" element={<Lander />} />
          <Route path='/searched' element={<Home />} />
          <Route path='*' element={<Home />} />
      </Route>
    </Routes> 

    </div>
  );
}

export default App;
