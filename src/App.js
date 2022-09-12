import {BrowserRouter,Route,Routes} from 'react-router-dom';
import AddProducts from './components/AddProducts';
import EditProducts from './components/EditProducts';
import Navbar from './components/Navbar';
import ShowProducts from './components/ShowProducts';


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
          <Routes>
           <Route path='product/show' element={<ShowProducts/>} />
           <Route path='product/add' element={<AddProducts/>} />
           <Route path='product/edit/:id' element={<EditProducts/>} />
          </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
