import React, { Component } from 'react';
import './App.css';
import line3Style from './line3Style';

class App extends Component {
    render() {
        const line1Style = {backgroundColor: 'yellow'};
        return (
            <div>
                <div style={line1Style}>Line1</div>
                <div className="line2Style">Line2</div>
                <div style={line3Style}>Line3</div>
            </div>
        );
    }
}

export default App;
