import React from 'react';

class ConfigCount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            direction: 1
        }
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.number >= this.props.upperLimit) {
                this.setState({
                    direction: -1
                })
            } else if (this.state.number <= this.props.lowerLimit) {
                this.setState({
                    direction: 1
                })
            }
            
            if (this.state.direction === 1) {
                this.setState({
                    number: this.state.number + this.props.countBy
                })
            } else if (this.state.direction === -1) {
                this.setState({
                    number: this.state.number - this.props.countBy
                })
            }
        }, 100)
    }

    render() {
        return(
            <h1>{this.state.number}</h1>
        )
    }


}


export default ConfigCount;