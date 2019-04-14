import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connectToServer = this.connectToServer.bind(this);
  }
  connectToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connectToServer();
  }
  render() {
    return (
      <Router>
      <p>Success</p>
      </Router>
    );
  }
}
export default App;