import React from 'react';
import ReactDOM from 'react-dom';

function Content(props) {
    return <p>Content 元件的 props.value: { props.value }</p>;
}


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
                <Content value={this.state.value} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));