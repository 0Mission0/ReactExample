import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const array = [
            <h3 key={0}>陣列</h3>,
            <p key={1}>陣列會自動展開。注意，陣列中每一項元素需要增加key屬性</p>,
            '<p>來個字串唄</p>'
        ];
        return (
            <li>
                {array}
            </li>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));