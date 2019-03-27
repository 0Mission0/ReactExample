import React from 'react';
import ReactDOM from 'react-dom';

function Button(props, context) {
    return (
        <button style={{ background: context.color }}>
            { props.children }
        </button>
    );
}

function Message(props) {
    return (
        <li>
            { props.text } <Button>Delete</Button>
        </li>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    
    getChildContext() {
        return { color: 'gray' };
    }
    
    render() {
        const messages = [
            { text: 'Hello React'},
            { text: 'Hello Redux'}
        ];
        
        const children = messages.map(
            (message, key) => <Message key={key} text={message.text} />
        );
        
        return (
            <div>
                <p>透過context將 color 跨級傳遞給裡面的 Button 元件</p>
                <ul>
                    { children }
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));