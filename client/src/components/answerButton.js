import React from 'react';

class AnswerButton extends React.Component {
  render() {
    return (
      <button
        disabled={this.props.classTag !== 'answer'}
        className={this.props.classTag}
        onClick={this.props._onClick}
        key={this.props.id}
      >
        {this.props.text}
      </button>
    );
  }
}

export default AnswerButton;
