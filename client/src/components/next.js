import React, { Component } from 'react';

class Next extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.refreshPage = this.refreshPage.bind(this);
  }

  componentDidMount() {}

  refreshPage() {
    window.location.reload();
  }

  render() {
    return (
      <button className="next" onClick={this.refreshPage}>
        ↺
      </button>
    );
  }
}

export default Next;
