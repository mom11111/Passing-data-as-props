import React, { Component } from 'react'

export default class Appy extends Component {
    state={
        name:'nishant',
        age:22,
        city:'Bihar'
    }
    handlechange=(e)=>{
       // console.log(e.target.id);
        //console.log(e.target.value);
        //var k=e.target.id;
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    heandlesubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.add(this.state);
    }
    render() {
        return (
            <div className="main1">
            <form onSubmit={this.heandlesubmit}>
                <input type="text" id="name" onChange={this.handlechange} placeholede={this.state.name} />
                <input type="text" id="age" onChange={this.handlechange} />
                <input type="text" id="city" onChange={this.handlechange} />
                <button >submit</button>

            </form>
                
            </div>
        )
    }
}
