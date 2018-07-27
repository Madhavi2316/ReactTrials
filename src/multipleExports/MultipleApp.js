import React, { Component } from 'react';
import Testdeafult, { Testing } from './MulFunctions';//default export
//import { Testing } from './MulFunctions';//export
import * as fun from './FunctionTest';
class MultipleApp extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Testdeafult />
                Heading
                <Testing />
                <fun.fun1 />{/*function access from functiontest file where all functions are exported and imported using * and a alias name*/}
                <fun.fun2 />{/*function access from functiontest file where all functions are exported and imported using * and a alias name*/}
                <fun.fun3 />{/*function access from functiontest file where all functions are exported and imported using * and a alias name*/}
            </div>
        );

    }
}
export default MultipleApp;