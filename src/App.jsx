import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Faq from './components/Faq/Faq';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Card></Card>
      <Faq></Faq>
    </div>
  );
};

export default App;