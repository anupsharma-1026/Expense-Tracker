import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
import Routing from './Routing';


ReactDom.render(
  <div>
    <BrowserRouter>
    <Routing></Routing>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
)