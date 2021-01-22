'use strict';

const e = React.createElement;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    render() {
        return <div>
            <button onClick={() => this.setState({count: this.state.count + 1})}>
                Start !
            </button>
            <span>{this.state.count}</span>
        </div>;
    }
}

var domContainer = document.querySelector('#react-app');
ReactDOM.render(e(Main), domContainer);