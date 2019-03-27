import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        const name = 'JSX';
    
        const sayHello = () => {
            let result = 'hello ';
            if(name) {
                result += name;
            }
            else {
                result += 'world';
            }
            return result;
        };
        
        return (
            <li>
                <h3>JavaScript 運算式</h3>
                <p>hello {name || ' world'}</p>
                <p className={name ? 'class-a': 'class-b'}>
                    hello {name && ' world'}
                </p>
                <p>{sayHello()}</p>
            </li>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));