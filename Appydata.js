
import React, { Component } from 'react';
import Appy from './Appy';
class New extends Component{
    state={
        name:null,
        age:null,
        city:null
    }
add=(ninja)=>{
   console.log(ninja.name);
   this.setState({
       name:ninja.name
   });
}
render(){
    return(
        <div className="motu">
             <h1>hello from {this.state.name}</h1>
              <Appy add={this.add} />
        </div>
      
    );
}
}
export default New;