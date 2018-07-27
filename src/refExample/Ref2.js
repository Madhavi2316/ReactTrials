import React from 'react';
const Ref2=(props)=>{
    return(
        <div>
            <input value={props.ag} type="text" name="age" ref={props.ref2}/>
            <br/>
            <br/>
            <button onClick={props.btn}>check Me</button>
        </div>
    );
}
export default Ref2;