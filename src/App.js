import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Shop from './pages/shop';
import Card from './pages/card';
import Login from './pages/login';
import Footer from './components/footer';
import Checkout from './pages/checkout';
import Contact from './pages/contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/Card' element={<Card/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Route>
      <Route path='/Login' element={<Login/>} />
      <Route path='/Checkout' element={<Checkout/>} />
    </>
  )
)

function RootLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
