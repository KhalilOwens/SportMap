import React from "react";
import Background from "./urban.jpg"

const styles = {
    panel: {
        width: "100%",
        
       height: "680px",

        backgroundImage: `url(${Background})`,

        backgroundSize: "100%",

       fontFamily: 'Gloria Hallelujah, cursive',

       backgroundRepeat: "no-repeat"
       
        
     
    }
}

const Home = props => (

 <div id="background" style={styles.panel} src={Background}>

     {props.children}
     
     
        </div>
   
    


);

export default Home;