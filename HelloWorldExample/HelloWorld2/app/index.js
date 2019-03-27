import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        let text = "Hello";
        return (
            <div>
                <h1>Hello, World!</h1>
                <h1>{text}, World!</h1>
                <h1>{`${text}, World!`}</h1>
                <ul>
                    <li id={`${text}1`}>Hello1</li>
                    <li id={`${text}2`}>Hello2</li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));