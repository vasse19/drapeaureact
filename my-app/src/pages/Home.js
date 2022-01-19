import React from "react";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
//importation du react et des composants nav, logo et countries

const Home = () => {
    //rendu avec une importation de la nav, logo, countries et un titre 
    return (
        <div className="home">
            <Navigation />
            <Logo />
            <Countries />
            <h1>Accueil</h1>
        </div>
    );
};

export default Home;





