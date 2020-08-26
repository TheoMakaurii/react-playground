import React, {Component} from 'react';

class Bomb extends Component{
   

    constructor(props){
    super(props)
    this.state={
        count:0,
        isTick: true
    }}

    componentDidMount(){
        this.interval= setInterval(() => {
            const timer =this.state.count +1
            this.setState({count:timer  })
        },1000)
        console.log(this.count)
        
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return( 
                <div>
                    <h3>ITS THE BOMB</h3>
                    {this.state.isTick && <h3>Tick</h3>}
                    {!this.state.isTick && <h3>Tock</h3>}
                </div>
            )
    }

}

export default Bomb;