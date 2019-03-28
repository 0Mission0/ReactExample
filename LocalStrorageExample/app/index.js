import React from 'react';
import ReactDOM from 'react-dom';
import InputBar from './components/InputBar';

class App extends React.Component {
    render() {
        return (
            <div>
                <InputBar />
            </div>
        );
    }
}

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
}

render();