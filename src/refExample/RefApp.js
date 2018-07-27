import React, {Component} from 'react';
import Ref1 from './Ref1';
import Ref2 from './Ref2';
class RefApp extends Component{
    constructor(props){
        super(props);
        this.state={name:'Mady',age:'23'};
        this.Ref1=React.createRef();
        this.Ref2=React.createRef();
        this.btnChek1=this.btnCheck1.bind(this);
        this.btnCheck2=this.btnCheck2.bind(this);
        
    }
    btnCheck1(){ 

        console.log(this.Ref1.current);
    }
    btnCheck2(){
        // console.log(this.Ref1.current.current);
        alert("Your Age is: " +this.Ref2.current.value);
    }
    render(){
        return(
            <div>
                 debbuger;
                <p>I am RefApp {this.state.name} </p>
                <Ref1 nme={this.state.name} ref1={this.Ref1} btn={this.btnCheck1} /><br/>
                <Ref2 ag={this.state.age} ref2={this.Ref2} btn={this.btnCheck2}/>
            </div>
        )
    }

}
export default RefApp;