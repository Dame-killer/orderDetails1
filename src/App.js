import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import './proxy';
import Index from "./pages/AdminPage/home/index.jsx"
import Category from "./pages/AdminPage/Category/Category";
import Customer from "./pages/AdminPage/Customer/Customer";
import Employee from "./pages/AdminPage/Employee/Employee";
import Order from "./pages/AdminPage/Order/Order";
import Payment from "./pages/AdminPage/Payment/Payment";
import Book from "./pages/AdminPage/Book/Book";
import AddBook from "./pages/AdminPage/Book/AddBook";
import EditBook from "./pages/AdminPage/Book/EditBook";
import Role from "./pages/AdminPage/Role/Role";
import Subcategories from "./pages/AdminPage/Category/Subcategory";
import Permisstion from "./pages/AdminPage/Permisstion/Permisstion";
import Login from "./pages/AdminPage/login";
import OrderDetail from './pages/AdminPage/Order/OrderDetail.jsx';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập của người dùng
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loggedIn ? <Index /> : <Navigate to="/login" />} />
        <Route path="/category" element={loggedIn ? <Category /> : <Navigate to="/login" />} />
        <Route path="/Subcategories/:id" element={loggedIn ? <Subcategories /> : <Navigate to="/login" />} />
        <Route path="/Role" element={loggedIn ? <Role /> : <Navigate to="/login" />} />
        <Route path="/employee" element={loggedIn ? <Employee /> : <Navigate to="/login" />} />
        <Route path="/customer" element={loggedIn ? <Customer /> : <Navigate to="/login" />} />
        <Route path="/order" element={loggedIn ? <Order /> : <Navigate to="/login" />} />
        <Route path="/payment" element={loggedIn ? <Payment /> : <Navigate to="/login" />} />
        <Route path="/book" element={loggedIn ? <Book /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/Role" element={<Role />} />
        <Route path="/Permisstion" element={loggedIn ? <Permisstion /> : <Navigate to="/login" />} />
        <Route path="/EditBook/:id" element={loggedIn ? <EditBook /> : <Navigate to="/login" />} />
        <Route path="/OrderDetail/:id" element={loggedIn ? <OrderDetail /> : <Navigate to="/login" />} />
        <Route path="/AddBook" element={loggedIn ? <AddBook /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
