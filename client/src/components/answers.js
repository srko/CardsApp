import React, { Component } from 'react';
import AnswerButton from './answerButton';

class Answers extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      answers: [],
      clickedId: null,
    };
  }

  componentDidMount() {
    fetch('/answers')
      .then(res => res.json())
      .then(answers => this.setState({ answers }));
  }

  handleClick = (item, id) => {
    this.setState({
      clickedId: id,
    });

    const url = '/answers/' + item._id;
    let data = {
      body: item.text,
      score: ++item.score,
    };
    let fetchData = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    console.log(data);
    fetch(url, fetchData).then();

    setTimeout(function() {
      window.location.reload();
    }, 2000);
  };

  render() {
    return (
      <div className="answers">
        {this.state.answers.map((answer, index) => {
          // let className = index === this.state.clickedId ? 'answer selected' : 'answer';
          let className;
          if (index === this.state.clickedId) {
            className = 'answer selected';
          } else if (this.state.clickedId === null) {
            className = 'answer';
          } else {
            className = 'answer disabled';
          }
          // return <button
          //          className={className}
          //          onClick={this.handleClick.bind(this, answer, index)}
          //          key={answer.id}>
          //            {answer.text} → {answer.score}
          //        </button>

          return (
            <AnswerButton
              classTag={className}
              _onClick={this.handleClick.bind(this, answer, index)}
              text={answer.text}
              score={answer.score}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}

export default Answers;
