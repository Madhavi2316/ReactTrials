import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dec from './count/Dec';
import Add from './count/Add';

class App extends Component {
  constructor(props){
    super(props);
    this.state={count:0};
    this.add=this.add.bind(this);
    this.dec=this.dec.bind(this);
  }
  //increase button code passing through proops
  add(e){
    // console.log(this.state.count);
    this.setState({count:this.state.count+1});
  }
  //decrease button code passing through props
  dec(){
    if(this.state.count>0){
      this.setState({count:this.state.count-1})
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Count is: {this.state.count}</div>
        <Add add={this.add}/>
        <br/>
        <Dec  dec={this.dec}/>

      </div>
    );
  }
}

export default App;
