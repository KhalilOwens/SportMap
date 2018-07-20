import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import { Link } from "react-router-dom";
//import { Auth } from "aws-amplify";
import axios from "axios";
//import home from "./home";


const styles = {
  panel: {
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "red",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "45%",
    height: "75%",
    boxSizing: "border-box",
    paddingLeft: "150px",
    paddingBottom: "120px",
    paddingTop: "50px",
    paddingRight: "50px",
    font: "bold",
    fontSize: "18px"
  }
}
const textarea = {
  panel: {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    padding: "15px",
    color: "white"
  }
}


export default class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      location: "",
      height: "",
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick(data) {

    this.setState({
      name: this.name,
      age: this.age,
      location: this.location,
      height: this.height,
      showComponent: true,
    });
    console.log(data)
  }
  toggleHidden() {
    this.setState({
      showComponent: !this.state.showComponent
    })
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.age.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });

  }


  handleFormSubmit = event => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      age: this.state.age,
      location: this.state.location,
      height: this.state.height

    }
    console.log(data);
    // use axios post to /users/register with the form data
    axios.post('/users/register', data).then(function (response) {
      console.log(response);
      sessionStorage.setItem('userId', response.data._id);
      window.location.href = '/register2';


    }).catch(err => {
      console.log(err.response);
    })

    // try {
    //   await Auth.signIn(this.state.email, this.state.password);
    //   alert("Logged in");
    // } catch (e) {
    //   alert(e.message);
    // }

  }


  render() {
    return (


      <div style={styles.panel} className="form-area">
        <h3> Register </h3>
        <br />
        <form onSubmit={this._onButtonClick} action="">
          <FormGroup controlId="name" >
            <ControlLabel>Name:</ControlLabel>
            <FormControl
              style={textarea.panel}
              autoFocus
              type="name"
              placeholder="enter full name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>


          <FormGroup controlId="age" >
            <ControlLabel>Age</ControlLabel>
            <FormControl
              value={this.state.age}
              onChange={this.handleChange}
              type="age"
              style={textarea.panel}
              placeholder="Enter Age"
            />
          </FormGroup>
          <FormGroup controlId="location" >
            <ControlLabel>Location</ControlLabel>
            <FormControl
              value={this.state.location}
              onChange={this.handleChange}
              type="location"
              style={textarea.panel}
              placeholder="City/State"
            />
          </FormGroup>
          <FormGroup controlId="height" >
            <ControlLabel>Height</ControlLabel>
            <FormControl
              value={this.state.height}
              onChange={this.handleChange}
              type="integer"
              style={textarea.panel}
              placeholder="Enter Height"
            />
          </FormGroup>

          <Button
            block 
            bsSize="large"
            onClick={this.handleFormSubmit}
            disabled={!this.validateForm()}
            type="button" >
Next          </Button>
          

          <br />




        </form>
      </div>
    )

  };

}