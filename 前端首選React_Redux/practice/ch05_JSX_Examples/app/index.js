import React from 'react';
import ReactDOM from 'react-dom';

function Demo5() {
    const array = [
        <h3 key={0}>陣列</h3>,
        <p key={1}>陣列會自動展開。注意，陣列中每一項元素需要增加key屬性</p>,
    ];
    return (<li>{array}</li>);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <ul>
                <li>
                    <h3>JSX and HTML</h3>
                </li>
                <Demo5 />
            </ul>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));