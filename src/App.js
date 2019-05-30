import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class InstaFollowers extends Component {

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
      <div>
        { instagram }
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
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


class SuccessPage extends Component {
  render () {
    return (
      <div>
        <h1>thanks bro</h1>
        <Link to="/">Back</Link>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
          <Route exact path="/" component={InstaFollowers} />
          <Route exact path="/success" component={SuccessPage} />
        </div>
      </Router>
    )

  }
}

export default App;