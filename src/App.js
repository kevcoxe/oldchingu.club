import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingFollowers: true,
      followers: 0,
    };
  }

  componentDidMount() {
    this.getFollerCount()
  }

  getFollerCount() {
    axios.get("https://www.instagram.com/oldchingu")
    .then(res => {
      if (res.status === 200 && res.data.indexOf(("meta property=\"og:description\" content=\"")) !== -1) {
        var followers = res.data.split("meta property=\"og:description\" content=\"")[1].split("Followers")[0];
        console.log("followers:", followers);
        this.setState({
          followers: followers,
          loadingFollowers: false,
        })
      }
    })
  }

  render() {

    const { followers, loadingFollowers } = this.state;

    const instagram = loadingFollowers ? <h1>Loading instagram followers</h1> : <h1>Instagram followers: { followers }</h1>;

    return (
      <div className="App">
        { instagram }
        <form name="contact" method="POST" data-netlify="true" action="/test">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>   
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    )

  }
}

export default App;
