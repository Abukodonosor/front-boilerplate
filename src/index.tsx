import { configureStore } from "../src/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./stylesheets/index.css";


// components
import { Header } from "./components/Header";

// Scenes
import Home from './scenes/Home/Home';
import Login from './scenes/Login/Login';

// 404 scene page
import { NotFound } from './scenes';


import "./stylesheets/App.css";

const element: HTMLElement | null = document.getElementById("root");

const { store, persistor } = configureStore();

const ConnectedApp = (
  <Provider store={store as any}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route exact={true} path="/home" component={Home} />
            {/* 404 Route  */}
            <Route path="/*" component={NotFound} />
          </Switch>
        </React.Fragment>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(ConnectedApp, element);