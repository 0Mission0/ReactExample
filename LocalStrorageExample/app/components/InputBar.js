import React from 'react';
import { saveStorage, loadStorage } from '../localStorage';

class InputBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'text': '',
            'storedText': ''
        };
        this.onTextInput = this.onTextInput.bind(this);
        this.setInput = this.setInput.bind(this);
    }

    componentDidMount() {
        const storedText = loadStorage();
        this.setState({'storedText': storedText});
    }

    onTextInput(event) {
        this.setState({
            'text': event.target.value
        });
    }

    setInput(newText) {
        if( newText != null && newText.trim() != '' ) {
            this.setState({'storedText': newText});
            saveStorage(newText);
        }
        this.setState({
            'text': ''
        });
    }

    render() {
        return (
            <div>
                <input autoFocus type='text' value={this.state.text} onChange={(e) => this.onTextInput(e)} />
                <button onClick={ () => this.setInput(this.state.text) }>Enter</button>{' '}
                <span>{ this.state.storedText }</span>
                {/* Actually, you can write loadStorage() to show the same text. But that's not what react doing */}
            </div>
        );
    }
}

export default InputBar;