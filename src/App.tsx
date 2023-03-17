import React from 'react';
import { RouterProvider } from "react-router-dom";

import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { routes } from './routes';


function App() {
  return (
    <div className="App">
      <Header />
        <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
