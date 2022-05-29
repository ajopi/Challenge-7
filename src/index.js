import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Layout } from './Pages/Layout';
import './Assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/store/store'
import { Provider } from 'react-redux';


store.subscribe(() => {
  console.log(store.getState(), "ini adalah data API");
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <Layout />
    </Provider>
  </React.StrictMode>
);

