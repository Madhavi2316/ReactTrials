import React, { Component } from 'react';
import Testdeafult from './MulFunctions';
import Testing from './MulFunctions';
class MultipleApp extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Heading
                <Testing />
            </div>
        );

    }
}
export default MultipleApp;