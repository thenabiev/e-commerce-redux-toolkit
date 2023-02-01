import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './components/State/Store';
// ROUTING
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import { ItemDetail } from './components/ItemDetail';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>

        <BrowserRouter>
            <NavbarComponent />
            <Routes >
                <Route path='/' element={<App />}/>
                <Route path='/detail/:itemId' element={<ItemDetail />}/>

            </Routes>
        </BrowserRouter>
    </Provider>
);
