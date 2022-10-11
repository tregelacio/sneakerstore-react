import React from "react";
import ReactDOM from "react-dom/client";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { ProductProvider } from './components/context';
//import * as serviceWorker from './serviceWorker';
//import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<ProductProvider><App /></ProductProvider>);

//serviceWorker.unregister();