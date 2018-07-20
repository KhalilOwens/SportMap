import React, { Component } from "react";
import Bron from "./lebron.jpg";
import JoinPickup from "./JoinPickup.jpg";
import HostPickup from "./HostPickup.jpg"; 
import Ranking from "./Rankings.jpg";
import DrillImg from "./Drills.jpg";
import Dwade from "./highlight.jpg"

const Lyles= {
    panel: {
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "red",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "85%",
        height:"79%",
        boxSizing: "border-box",
        paddingLeft: "150px",
        paddingBottom:"120px",
        paddingTop:"50px",
        paddingRight:"50px",
        font: "bold",
        fontSize: "18px",
        overflow: "auto"
}
}

const styles = {
    bronny: {
        float: "left",
        height: "200px",
        width: "60%",
        padding: "10px",
        
        
   
    }
    

}
const Top = {
    Rank: {
        float: "left",
        height: "200px",
        width: "60%",
        padding: "10px",
        
        
   
    }
    

}
const up = {
    High: {
        float: "left",
        height: "200px",
        width: "60%",
        padding: "10px",
        
        
   
    }
    

}
const Pickup = {
    Host: {
        float: "right",
        height: "200px",
        width: "60%",
        padding: "10px"
    }
}
const Do = {
    Drills: {
        float: "right",
        height: "200px",
        width: "60%",
        padding: "10px"
    }
}
const progress = {
    Drills: {
        float: "right",
        height: "200px",
        width: "60%",
        padding: "10px"
    }
}
export default class Main extends Component {

    
    render() {
        return  (
         <div style={Lyles.panel} className="container" >
         <div className="row">
        
         <div className="col-lg-5">
       <a href="/Map">   Join Local Games      <img alt="join" style={styles.bronny} src={JoinPickup}/>    </a>
        </div>    
      
        <div className="col-lg-5">
           Host Pickup Game     <img alt="host" style={Pickup.Host} src={HostPickup} />
                </div>
        </div> 

        <div className="row">
       
        <div className="col-lg-5">
         Rankings   <img alt="rank" style={Top.Rank} src={Ranking} />
        </div>

        <div className="col-lg-5">
         Drills  <img alt="drills" style={Do.Drills} src={DrillImg} />
      </div>
        
        </div>

        <div className="row">
        
         <div className="col-lg-5">
            Upload Highlights    <img alt="upload" style={up.High} src={Dwade} />   
        </div>    
      
        <div className="col-lg-5">
            Progress    <img alt="progress" style={progress.Drills} src={Bron} />
                </div>
        </div> 


        </div> 
        )
    }    
}