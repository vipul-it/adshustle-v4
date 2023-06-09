import { Route, Routes } from 'react-router';
import './App.css';
import Landingpage from './component/landingpage';
import Aboutus from './Routes/aboutus';
import Contact from './Routes/contact';
import Blog from './Routes/blog';
import Teamroute from './Routes/teamroute';

function App() {
  return (
    <>
     
      <Routes>
        <Route path='/' element={<Landingpage />}></Route>
        <Route path='/about-us' element={<Aboutus />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
        <Route path='/blogs' element={<Blog />}></Route>
        <Route path='/our-team' element={<Teamroute />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
