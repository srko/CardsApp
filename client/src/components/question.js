import React, { Component } from 'react';

class Question extends Component {
  state = { questions: [] }

  componentDidMount() {
    fetch('/questions')
      .then(res => res.json())
      .then(questions => this.setState({ questions }));
  }

  render() {
    return (
        <div className="question">
          {this.state.questions.map(question => <div key={question.id}>{question.text}</div>)}
        </div>
    );
  }
}

export default Question;
