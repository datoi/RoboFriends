import {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError === true) {
            return <h1>Oooops. that is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry