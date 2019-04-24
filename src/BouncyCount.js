import React from 'react';

class BouncyCount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            direction: 1
        }
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.number >= 100) {
                this.setState({
                    direction: -1
                })
            } else if (this.state.number <= -100) {
                this.setState({
                    direction: 1
                })
            }
            
            if (this.state.direction === 1) {
                this.setState({
                    number: this.state.number + 1
                })
            } else if (this.state.direction === -1) {
                this.setState({
                    number: this.state.number -1
                })
            }
            }, 100)
    }

    render() {
        return (
            <h1>{this.state.number}</h1>
        )
    }
}

export default BouncyCount;