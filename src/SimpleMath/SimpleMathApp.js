import React, {Component} from 'react';
import Add from './Add';
import Dec from './Dec';
import Mul from './Mul';
import Div from './Div';
import Reset from './Reset';

class SimpleMathApp extends Component{
    constructor(props){
        super(props);{
            this.state={first:'', second:'', count:0};
            this.add=this.add.bind(this);
            this.dec=this.dec.bind(this);
            this.mul=this.mul.bind(this);
            this.div=this.div.bind(this);
            this.reset=this.reset.bind(this);
            this.Ref1=React.createRef();
            this.Ref2=React.createRef();
        }
    }
    add(e){
       // console.log(this.Ref2.current.value);
      // this.setState({first:e.target.value});    

        let one=Number(this.Ref1.current.value);
        let two=Number(this.Ref2.current.value);
       // console.log(one + two);
        this.setState({count:one+two});
        //console.log(this.state.count);
    }
    dec(){
   

        let one=Number(this.Ref1.current.value);
        let two=Number(this.Ref2.current.value);
        if(one >0 && two >0){
            this.setState({count:one-two});
        }
    }
    mul(){
       
        let one=Number(this.Ref1.current.value);
        let two=Number(this.Ref2.current.value);
        if (one >0 && two>0){
            this.setState({count:one*two});
        }
    }
    div(){
       

        let one=Number(this.Ref1.current.value);
        let two=Number(this.Ref2.current.value);
        console.log(this.state.first);
        if(one>0 && two>0){
            this.setState({count:one/two});
        }
    }
    reset(e){
        this.setState({count:0});
        this.Ref1.current.focus();
    }
    render(){
        return(
            <div>
                Arthemetic Operations<br/>
                <label>Input 1</label>
                <input name="first" ref={this.Ref1} type="number" />
                <label>Input 2</label>
                <input  ref={this.Ref2} type="number" />
                
                <div>Result  : {this.state.count}</div>
                <div>
                    <Add btnAdd={this.add} />
                    <br />
                    <Dec btnDec={this.dec} />
                    <br />
                    <Mul btnMul={this.mul} />
                    <br/>
                    <Div btnDiv={this.div} />
                    <br />
                    <Reset btnReset={this.reset}/>
                </div>
            </div>
        )
    }
}
export default SimpleMathApp;
// import React from 'react';

// class SimpleMathApp extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };
//    updateState(e) {
//       this.setState({data: e.target.value});
//    }
//    render() {
//       return (
//          <div>
//             <input type = "text" value = {this.state.data} 
//                onChange = {this.updateState} />
//             <h4>{this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default SimpleMathApp;