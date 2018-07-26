import React, { Component } from 'react';
import Testdeafult, { Testing } from './MulFunctions';//default export
//import { Testing } from './MulFunctions';//export
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
            </div>
        );

    }
}
export default MultipleApp;