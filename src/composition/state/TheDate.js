import React, {Component} from 'react';

class TheDate extends Component {

    constructor(props){
        super(props)
            this.state=
                {datetime: new Date()}
    }
    componentDidMount(){
        this.interval= setInterval(() => {
            this.setState({datetime: new Date()})
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){

        return <div>It is {this.state.datetime.toLocaleTimeString()}</div>
    }
}

export default TheDate