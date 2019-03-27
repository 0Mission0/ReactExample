import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    };

    handleMouseDown = () => {
        this.setState({open: !this.state.open});
    };

    handleTouchStart = (e) => {
        e.preventDefault();
        this.handleMouseDown();
    };

    render() {
        return (
            <div>
                <button
                    onMouseDown={this.handleMouseDown}
                    onTouchStart={this.handleTouchStart}>
                    Toggle
                </button>

                <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
                    {({x}) =>
                        <div className="demo0">
                            <div className="demo0-block" style={{
                                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                transform: `translate3d(${x}px, 0, 0)`,
                            }} />
                        </div>
                    }
                </Motion>
            </div>
        );
    };

}

export default App;