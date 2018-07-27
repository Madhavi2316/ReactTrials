import React, { Component } from 'react';
import JsonFun from './JsonFun.json';
import SeconJson from './SeconJson.json';
class JsonApp extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            // <ul>
            // {
            //   JsonFun.map(function(movie){
            //     return <li>{movie.id} - {movie.title}</li>;
            //   })
            // }
            //</ul>
            //accessed json object and feteched details
            
               <ul>{
                 JsonFun.map(movie=><li>{movie.id}-{movie.title}</li>)
                
                 }
          </ul> 
            // <div>{
            //     SeconJson.map(movie=>movie.created)
            // }
            // </div>
            
            
        );
    }
}

export default JsonApp;
