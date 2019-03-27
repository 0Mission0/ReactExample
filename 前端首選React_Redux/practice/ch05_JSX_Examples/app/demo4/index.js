import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <li>
                <h3>註釋</h3>
                {/*你看不到我，你看不到我。這是 JSF 的註釋，不會出現在 html 上 */}
                <p>註釋需寫在大括號中</p>
            </li>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));