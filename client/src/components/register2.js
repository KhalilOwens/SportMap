import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
//import { Auth } from "aws-amplify";
import axios from "axios";
//import home from "./home";

// App for connecting amatuer games and events
const styles= {
    panel: {
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "red",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "45%",
        height:"79%",
        boxSizing: "border-box",
        paddingLeft: "150px",
        paddingBottom:"120px",
        paddingTop:"50px",
        paddingRight:"50px",
        font: "bold",
        fontSize: "18px"
}
}
const textarea= { 
    panel: {
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        padding:"15px",
        color: "white"
    }
}


export default class RegisterNext extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            email:"",
            password:"",
            password2:"",
            experience: "",
            improvements: "",
              showComponent: false
          };
          this._onButtonClick = this._onButtonClick.bind(this);
        }
        _onButtonClick(data) {
      
          this.setState({
            showComponent: true,
            email:this.email,
            password:this.password,
            password2:this.password2,
            experience: this.experience,
            improvements: this.improvements,
            
          });
          console.log(data)
        }
        toggleHidden() {
          this.setState({
            showComponent: !this.state.showComponent
          })
}

  validateForm() {
    return this.state.experience.length > 0 && this.state.improvements.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  handleFormSubmit = event => {
    event.preventDefault();
    const data = {
        email: this.state.email,
        password:this.state.password,
        password2:this.state.password2,
        experience: this.state.experience,
        improvements: this.state.improvements,
       
    }

    console.log(data);
    axios.post('/users/register2/' + sessionStorage.getItem('userId'), data).then(function (response) {
        console.log(data);
    }).catch(err => {
        console.log(err.response)
    })
    window.location.href = '/Main'    
}

render() {
    return (

       
<div style={styles.panel} className="form-area">
<h3> Register </h3> 
<br/>
<form onSubmit={this.handleSubmit} action="">
<FormGroup controlId="experience" >
<ControlLabel>Experience</ControlLabel>
<FormControl 
        value={this.state.experience}
        onChange={this.handleChange}
        style={textarea.panel}
        placeholder="League?"
        />
        

        </FormGroup>        
        <FormGroup controlId="improvements" >
        <ControlLabel>Improvements</ControlLabel>
<FormControl 
        value={this.state.improvements}
        onChange={this.handleChange}
        type="options"
        style={textarea.panel}
        placeholder="What part of your game would you like to improve?"
        />
        </FormGroup>        
        <FormGroup controlId="email" >
        <ControlLabel>Email</ControlLabel>
<FormControl 
        value={this.state.email}
        onChange={this.handleChange}
        type="email"
        style={textarea.panel}
        placeholder="Enter email"
        />
        </FormGroup>
        <FormGroup controlId="password" >
        <ControlLabel>Password</ControlLabel>
<FormControl 
        value={this.state.password}
        onChange={this.handleChange}
        type="password"
        style={textarea.panel}
        placeholder="Enter password"
        />
        </FormGroup>
        <FormGroup controlId="password2" >
        <ControlLabel>Confirm Password</ControlLabel>
<FormControl 
        value={this.state.password2}
        onChange={this.handleChange}
        type="password"
        style={textarea.panel}
        placeholder="Enter password"
        />
        </FormGroup>
              

<Button 
      block
      bsSize="large"
      onClick={this.handleFormSubmit}
      disabled={!this.validateForm()}
      type="button" >
          Submit
          </Button>
<br/>




</form>
</div>
    ) 

}; 
    
}
