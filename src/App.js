import React,{Component} from 'react';
import Home from './components/HomePage'
import './App.css';

class App extends Component {

  //Constructor is called for initialization
  constructor(props){
    super(props)
    this.state={
      value:0
    }
    this.setNewValue= this.setNewValue.bind(this)
  }

  setNewValue(){
    this.setState(
      {
        value:this.state.value+2
      }
    )
  }

  render(){
  return (
    <div className ="App">
      <h4>Demonstration of Component Life Cycle</h4>
      <div className="bold">
      <button onClick={this.setNewValue}>MULTIPLY BY 2</button>
      <Home myValue={this.state.value}></Home>
      </div>
    </div>
  );

  }

}

export default App;
