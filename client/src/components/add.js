import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

    const url = '/answers/';
    const data = {
      body: this.state.value,
      score: 0,
    };
    const fetchData = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    console.log(data);

    fetch(url, fetchData).then();

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  render() {
    const word = this.state.value;
    const isEnabled = word.length <= 0;
    console.log(isEnabled);

    return (
      <div className="add">
        {/* <div className="addName" /> */}
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              placeholder="Додайте варіант"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" disabled={isEnabled} value="Вжух!" />
        </form>
      </div>
    );
  }
}

export default Add;
