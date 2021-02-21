import react from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="wrapper-content">
                <Profile/>
            </div>

        </div>
    );
};

export default App;
