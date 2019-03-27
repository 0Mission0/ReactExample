import React from 'react';
import ReactDOM from 'react-dom';

const suffix = ' 被調用，this指向：';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    componentDidMount() {
        console.log(`componentDidMount${suffix}`, this)
    }
    componentWillReceiveProps() {
        console.log(`componentWillReceiveProps${suffix}`, this);
    }
    shouldComponentUpdate() {
        console.log(`shouldComponentUpdate${suffix}`, this);
        return true;
    }
    componentDidUpdate() {
        console.log(`componentDidUpdate${suffix}`, this);
    }
    componentWillUnmount() {
        console.log(`componentWillUnmount${suffix}`, this);
    }
    handler() {
        console.log(`handler${suffix}`, this);
    }
    render() {
        console.log(`render${suffix}`, this);
        this.handler();
        window.handler = this.handler;
        window.handler();
        return (
            <div>
                <p>Hello world!</p>
            </div>
        );
    }
}

console.log('首次掛載');
let instance = ReactDOM.render(<App />, document.getElementById('app'));

window.renderComponent = () => {
    console.log('掛載');
    instance = ReactDOM.render(<App />, document.getElementById('app'));
};

window.setState = () => {
    console.log('更新');
    instance.setState({ foo: 'bar' });
};

window.unmountComponentAtNode = () => {
    console.log('卸載');
    unmountComponentAtNode(document.getElementById('app'));
};

console.log(App);
console.log(<App />);
console.log(instance);