import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login/Login';
import Register from './pages/Authentication/Register/Register';
import Home from './pages/Home/Home';
import Navigation from './pages/Navigation/Navigation';
// import Service from './pages/Service/Service';
import Footer from './pages/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/Services';
import AuthProvider from './Context/AuthProvider'
import AddReview from './pages/PrivateRoute/AddReview/AddReview';
import Cart from './pages/PrivateRoute/Cart/Cart';
// import MyOrders from './pages/PrivateRoute/MyOrders/MyOrders';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/addreview"
              element={
                <PrivateRoute>
                  <AddReview/>
                </PrivateRoute>}>
            </Route>
            <Route path="/cart"
              element={
                <PrivateRoute>
                  <Cart/>
                </PrivateRoute>}>
            </Route>
            {/* <Route path="/myorders"
              element={
                <PrivateRoute>
                  <MyOrders />
                </PrivateRoute>}>
            </Route> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
