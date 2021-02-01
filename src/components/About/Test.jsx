import React from "react";


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Madiyar",
            time: 50,
        }
    }

    componentDidMount() {
        alert(this.state.name)
        this.setState({
            name: "Test"
        });
    }
    
    render() {

        return (
            <div>Test Page { this.state.name }</div>
        )
    }
}
export default Test;