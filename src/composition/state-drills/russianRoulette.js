import React, { Component } from 'react';

 class Gun extends Component {
    static defaultProps ={
        rounds:8
    }


state= {
    chamber: null,
    spinning: false
}

componentWillUnmount() {
    clearTimeout(this.timeout)
  }

handleClick = () =>{

    this.setState({
        spinning:true,
    })

    this.timeout=setTimeout(()=> {
        const randomChamber= Math.ceil(Math.random()*8)

        this.setState({
            chamber: randomChamber,
            spinning: false,
        })
    }, 2000)
}

renderDisplay(){
    const {chamber, spinning}= this.state
    const {rounds} = this.props

    if(spinning){
        return 'spinning the chamber'}
    else if (chamber === rounds){
        return "BANG!!! OUCH! YOUR DEAD!"}
    else {
        return "YOU GOT... Lucky!"
    }

}

render(){
    return (
        <div className= 'Roulette'>
            <h3>{this.renderDisplay()}</h3>
            <button onClick={this.handleClick}>
                Feeling lucky?
            </button>
        </div>
    )
}
}

export default Gun;