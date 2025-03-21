import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'; // Adjust the path as necessary
import { useState, useContext } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Header/Footer";
import Listing from "./components/Header/Listing";
import Cart from "./components/Header/Cart";
import SignIn from "./components/Header/LoginPage/SignIn";
import { MyContextProvider, Mycontext } from "./pages/Home/Context"; // ✅ Fixed import path
import Forgetpassw from "./components/Header/LoginPage/SignIn/Forgetpassw";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);

  const values = {
    isLogin,
    setIsLogin,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
  };

  return (
    <MyContextProvider value={values}>
      <Provider store={store}>
        <Router>
          <MainLayout />
        </Router>
      </Provider>
    </MyContextProvider>
  );
}

const MainLayout = () => {
  const { isHeaderFooterShow } = useContext(Mycontext);

  return (
    <>
      {isHeaderFooterShow && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:id" element={<Listing />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Forgetpassw" element={<Forgetpassw />} />
        {/* <Route path="/Forgetpassw" element={<Forgetpassw />} /> */}
        // Raw
        
      </Routes>
      {isHeaderFooterShow && <Footer />}
    </>
  );
};

export default App;
