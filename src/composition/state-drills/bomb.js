import React, {Component} from 'react';

class Bomb extends Component{
   

    constructor(props){
    super(props)
    this.state={
        count:0,
    }}

    componentDidMount(){
    this.interval= setInterval(() => {
            const timer =this.state.count +1
            this.setState({count:timer })
        },1000)


        
    }
    
    componentWillUnmount(){
            clearInterval(this.interval)
      }
    
    render(){
        return( 
                <div>
                    <h3>ITS THE BOMB</h3>
                    {this.state.count % 2 === 0 && this.state.count %7 !==0 && <h3>Tock</h3>}
                    {this.state.count % 2 !==0 && this.state.count % 7  !==0  &&<h3>Tick</h3>}
                    {this.state.count % 7 === 0 && this.state.count !==0 && <h1>BOOM!!!</h1>}
                   
                </div>
            )
    }

}

export default Bomb;