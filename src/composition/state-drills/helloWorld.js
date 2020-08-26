import React, {Component} from 'react';


class Hello extends Component{

    constructor(props){
        super(props)
        this.state={who: ""}
    }
    handleClick= how => {
        console.log(this.state.how)
        this.setState({who:how})
    }
    render(){
        return(
            <div className="Greeting">
                <h3>Hello {this.state.who}</h3>
                <button onClick= {() => this.handleClick("World")}>World</button>
                <button onClick={() => this.handleClick("Friend")}>Friend</button>
                <button onClick={()=> this.handleClick("React")} >React</button>

            </div>
        )}
    }

    export default Hello;