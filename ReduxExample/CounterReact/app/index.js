import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';
import Counter from './components/Counter';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Counter />
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));