import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      seconds: 5
    }

  }

  render() {

    const { seconds } = this.state;

    if (seconds === 1) {
      window.location.href = "https://www.oldchingu.com"
    } else {
      setInterval(() => {
        this.setState({
          seconds: seconds - 1,
        })
      }, 1 * 1000);
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Loading Old Chingu
          </p>
          <p>
            { seconds }
          </p>
        </header>
      </div>
    );
  }
}

export default App;
