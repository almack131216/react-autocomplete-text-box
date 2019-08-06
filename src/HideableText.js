import React from 'react';

export default class HideableText extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            isHidden: false,
            isHiddenText: 'not hidden'
        }
    }

    toggleIsHidden () {
        this.setState((currentState) => ({
            isHidden: !currentState.isHidden,
            isHiddenText: !currentState.isHidden ? 'hidden' : 'not hidden'
        }));
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggleIsHidden()}>Toggle ({this.state.isHiddenText})</button>
                {!this.state.isHidden && this.props.text}
            </div>
        )
    }
}