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
                <h3>樣式</h3>
                <p style={{color: 'red', fontSize: '14px'}}>內聯樣式不是字串，而是物件</p>
            </li>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));