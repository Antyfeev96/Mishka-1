import react from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="wrapper-content">
                <Route path='/dialogs' component={Dialogs} />
                <Route path='/profile' component={Profile} />
            </div>
        </div>
        </BrowserRouter>
    );
};

export default App;
