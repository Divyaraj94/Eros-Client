import './App.css';
// import Card from './components/Cards';

// import Navbar from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Shop from './pages/Shop/Shop';
import CorporateCollection from './pages/Our_Collections/CorporateCollection';
import AboutUs from './pages/About us/AboutUs';
import ContactUs from './pages/Contact us/ContactUs';
import BulkInquiry from './pages/Bulk Inquiry/BulkInquiry';
import  Layout  from './components/Layout';


function App() {
  return (
    // <div className="App">
    //   {/* <Navbar />
    //   <Slider />
    //   <Hygen />
    //   <Card />
    //   <Section />
    //   <Our_Collection />
    //   <Footer /> */}
    //   <CorporateCollection />
    // </div>

<Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/corporate' element={<CorporateCollection/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/bulkInquiry' element={<BulkInquiry/>}/>
    </Route>
</Routes>

  );
}

export default App;
