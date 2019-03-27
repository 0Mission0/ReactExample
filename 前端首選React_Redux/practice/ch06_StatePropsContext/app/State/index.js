import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({value: this.state.value + 1})}>Increment</button>
                Counter 元件的內部狀態：
                <pre>{ JSON.stringify(this.state, null, 4) }</pre>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));