import React from 'react';
import { connect } from 'react-redux';
import CounterApp from '../Components/CounterApp';
import { AddAction } from '../Actions/AddCounterAction';
import { DecAction } from '../Actions/DecCounterAction';

class CounterAppConatiner extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        console.log(event.target.name);
        if(event.target.name === 'ADD')
           this.props.add();
        if(event.target.name === 'DEC')
            this.props.dec();
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    render(){
        console.log(this.props.count.count);
        //let counter = this.props.count;
        return(
            <div>
                <CounterApp c={this.props.count.count} clickEvent={this.handleClick} />
            </div>
        );

    };
};
function mapStateToProps(state) {
    return {
        count: state.CounterReducer,
    };
};

const mapDispatchToProps = (dispatch) => ({
    add: () => {
        dispatch(AddAction())
    },
    dec: () => {
        dispatch(DecAction())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterAppConatiner);