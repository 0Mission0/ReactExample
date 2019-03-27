import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <li>
                <h3>類似HTML</h3>
                <p data-attribute="demo1">可以巢狀結構，可以自訂屬性</p>
            </li>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));