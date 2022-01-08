import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, NavDropdown, Nav, Modal, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import WelcomeComponent from "./Welcome";
import React, {Component} from 'react';


// const

class App extends Component{
  state={
    isModalOpen:false,
    count:0
  };
  handleModalChange = () => {
    const {isModalOpen}=this.state;
    isModalOpen ? this.setState({isModalOpen : false}) : this.setState({isModalOpen : true});
  }
  counterInc = () => {
    
    const {count} = this.state;
    this.setState({count: count + 1})
  }
  counterDec = () => {
    const {count} = this.state;
    this.setState ( {count: count - 1})
  }
  render(){
    const {isModalOpen}=this.state;
    

    return (
      <>
      <Button variant="primary" onClick={this.handleModalChange}>
        Launch demo modal
      </Button>

      <Modal show = {isModalOpen} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.state.count}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleModalChange}>
            Close
          </Button>
          <Button variant="primary" onClick={this.counterInc}>
            Save Changes
          </Button>
          <Button  onClick={this.counterInc}>
            Inc
          </Button>
          <Button  onClick={this.counterDec}>
            Dec
          </Button>
        </Modal.Footer>
      </Modal>
    </>


    );

  }

}

export default App;
