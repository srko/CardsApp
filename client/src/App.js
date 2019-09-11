import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.min.css';
import Question from './components/question';
import Answers from './components/answers';
import Add from './components/add';
import Next from './components/next';
import Modal from './components/modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const modalIcon = this.state.isModalOpen ? '🔓' : '🔒';

    return (
      <div className="app">
        <Question />
        <Answers />
        <Add />

        <div>
          <button
            style={{
              marginTop: '3rem',
              borderRadius: '100px',
              border: 'none',
              width: '30px',
              height: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 117.6px 2.4px rgba(0, 0, 0, 0.03)',
              color: 'rgb(16, 16, 16)',
              backgroundColor: 'rgb(255, 255, 255)',
            }}
            onClick={() => this.openModal()}
          >
            {modalIcon}
          </button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h1>Modal title</h1>
            <p>hello</p>
            <p>
              <button onClick={() => this.closeModal()}>Close</button>
            </p>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
