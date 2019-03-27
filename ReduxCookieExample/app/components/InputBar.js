import React from 'react';
import { connect } from 'react-redux';
import { getCookie, setCookie } from 'redux-cookie';
import { setInputAction } from '../actions';

class InputBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'text': ''
        };
        this.onTextInput = this.onTextInput.bind(this);
        this.setInput = this.setInput.bind(this);
    }

    componentDidMount() {
        const cookieText = this.props.getCookie("ReduxCookieTest");
        this.props.setInputAction(cookieText);
        console.log('componentDidMount', cookieText);
    }

    onTextInput(event) {
        this.setState({
            'text': event.target.value
        });
    }

    setInput(newText) {
        if( newText != null && newText.trim() != '' ) {
            this.props.setCookie('ReduxCookieTest', newText, { expires: 1 });
            this.props.setInputAction(newText);
        }
        this.setState({
            'text': ''
        });
    }

    render() {
        return (
            <div>
                <input autoFocus type='text' value={this.state.text} onChange={(e) => this.onTextInput(e)} />
                <button onClick={ () => this.setInput(this.state.text) }>Add</button>{' '}
                <span>{ this.props.text }</span>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.InputReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setInputAction: (text) => dispatch(setInputAction(text)),
    setCookie: (text, name) => dispatch(setCookie(text, name)),
    getCookie: (name) => dispatch(getCookie(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputBar);