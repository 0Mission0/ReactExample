import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
            </div>
        );
    }
}

// Enhance is actually a function, but return Component
const Enhance = App => class extends React.Component {
    componentWillMount() {
        console.log("HOC Mount");
    }
    
    render() {
        return (
            //<App {...this.props} />   // JSX Spread Attributes
            //<App name={this.props.name} />
            <App {...this.props} name="override" />   // Original Attributes will be override
        );
    }
}

const higherOrderComponent = Enhance(App);

var props = {
    "name": "Mission"
};

ReactDOM.render(
    React.createElement(higherOrderComponent, props, null), 
    document.getElementById('app')
);