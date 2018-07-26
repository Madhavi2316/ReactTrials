import React from 'react';
class testdeafult extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Default is it really
            </div>
        );
    }
}
export default testdeafult;
//this export can be  imported as a object at the time of import
export class Testing extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Not a default Export
            </div>
        );
    }
}