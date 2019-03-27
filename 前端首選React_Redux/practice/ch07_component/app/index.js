import React from 'react';
import ReactDOM from 'react-dom';

const suffix = ' 被呼叫，this指向：';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.handler2 = this.handler2.bind(this);
    }
    
    handler1() {
        console.log(`handler1${suffix}`, this);
    }
    
    handler2() {
        console.log(`handler2${suffix}`, this);
    }
    
    render() {
        console.log(`render${suffix}`, this);
        return (
            <div>
                <h1 onClick={this.handler1}>Handler1</h1>
                <h1 onClick={this.handler2}>Handler2</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));