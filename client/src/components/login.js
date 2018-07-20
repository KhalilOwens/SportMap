import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import { Auth } from "aws-amplify";
//import Register from "./register";
import { Link } from "react-router-dom";

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
    fontSize: "22px"
  }
}
const textarea = {
  panel: {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    padding: "15px"
  }
}


export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {

    this.setState({
      showComponent: true,
    });
  }
  toggleHidden() {
    this.setState({
      showComponent: !this.state.showComponent
    })
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  handleSubmit = async event => {
    event.preventDefault();

    try {
      await Auth.signIn(this.state.email, this.state.password);
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (

      <div style={styles.panel} className="form-area">
        <h3> Login </h3>
        <br />
        <form onSubmit={this.handleSubmit} >
          <FormGroup controlId="email" >
            <ControlLabel>Email:</ControlLabel>
            <FormControl
              style={textarea.panel}
              autoFocus
              type="email"
              placeholder="enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <br />
          <FormGroup controlId="password" >
            <ControlLabel>Password:</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              style={textarea.panel}
              placeholder="enter password"
            />
          </FormGroup>
          <br />
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            href="/Main"
          >
            Login
                </Button>
          <br />
          <Link className="btn btn-primary" to="/register">Register</Link>
{/* 
          <Button block
            bsSize="large"
            className="btn btn-link"
            onClick={this.toggleHidden.bind(this)}>Register</Button>
          {!this.state.showComponent ? <Register /> : null} */}

        </form>
      </div>
    )
  };


}

//export default Login;