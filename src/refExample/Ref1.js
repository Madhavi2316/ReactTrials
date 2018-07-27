import React from 'react';
const Ref1=(props)=>{
      return(
         <div>
             <input  value={props.nme} type="text" name="name" ref={props.ref1} />
             <br/><br/>
             <button onClick={props.btn}>check Me</button>
         </div> 
     );
 }
 export default Ref1;