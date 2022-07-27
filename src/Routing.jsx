import React from 'react';
import { Routes , Route } from 'react-router-dom';
import App from './App';
import Delete from './component/Delete';
import Edit from './component/Edit';

const Routing = () => {
    return (
<Routes>
    <Route exact path='/' element={<App/>} ></Route>
    <Route exact path='/app' element={<App/>} ></Route>
    <Route exact path='/edit/:userID' element={<Edit/>} ></Route>
    <Route exact path='/delete/:userID' element={<Delete/>} ></Route>
</Routes>
    );
};

export default Routing;