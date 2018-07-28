import React from 'react';

const CounterApp = (props) =>{
    //console.log(JSON.stringify(props));
    return(
        <div>
        <div>
            {props.c}
        </div>

        <div>
            <button name="ADD" onClick={props.clickEvent} > ADD </button>
            <button name="DEC" onClick={props.clickEvent} > DEC </button>
        </div>
        </div>
    );
}

export default CounterApp;