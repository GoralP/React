import React from 'react';
import { Router } from "@reach/router";
import Home from "./views/Home";
import './application.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Home path="/" />
        {/* <About path="/:Id" /> */}
      </Router>
    </Provider>
  );
};

export default App;
