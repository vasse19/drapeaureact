import React from "react";
//importation du react


const Logo = () => {
   //rendu avec image et titre en h3
    return ( 
        <div className="logo">
            <img src="./logo192.png" alt="logo" />     
            <h3>React World</h3>
        </div>
    )
}

//export
export default Logo;