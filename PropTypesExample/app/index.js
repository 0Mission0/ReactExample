import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class MyTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <span>
                <h1>{this.props.title}</h1>
                <h3>{this.props.number}</h3>
            </span>
        )
    }
}

MyTitle.propTypes = {
    number: PropTypes.number,
    title: PropTypes.string.isRequired
};

ReactDOM.render(<MyTitle number={123} title={"Hello, World!"} />, document.getElementById('app'));