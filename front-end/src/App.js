import { Routes , Route } from 'react-router-dom';

//import of stand alone components 
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

//import of pages that are linked to components

import Home from './Pages/Home';


function App() {
  return (
    <div className="main">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
