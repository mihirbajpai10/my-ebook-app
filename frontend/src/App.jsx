import React from 'react'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addebook from './components/Addebook';
import Contactus from './components/Contactus';
import { Toaster } from 'react-hot-toast';
import Books from './components/Books';
import ViewDetails from './components/ViewDetails';
import { AppProvider } from './AppContext';
import { SnackbarProvider } from 'notistack';

const App = () => {
  return (
    <div>
      <Toaster position='top-right' />
      <SnackbarProvider maxSnack={3} anchorOrigin={
        {
          vertical: 'top',
          horizontal: 'right'
        }

      }>
        <AppProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/addebook" element={<Addebook />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/books" element={<Books />} />
              <Route path="/viewdetails/:id" element={<ViewDetails />} />
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </SnackbarProvider>
    </div>
  )
}

export default App