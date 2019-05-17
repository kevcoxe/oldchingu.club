import React, { Component } from 'react';
import './App.css';


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
    const that = this;
    var url = "https://www.instagram.com/oldchingu";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200 && xhr.responseText.indexOf(("meta property=\"og:description\" content=\"")) !== -1) {
            var followers = xhr.responseText.split("meta property=\"og:description\" content=\"")[1].split("Followers")[0];
            console.log("followers:", followers);
            that.setState({
              followers: followers,
              loadingFollowers: false,
            })
        }
    };
    xhr.send();
  }

  render() {

    const { followers, loadingFollowers } = this.state;

    const instagram = loadingFollowers ? <h1>Loading instagram followers</h1> : <h1>Instagram followers: { followers }</h1>;

    return (
      <div className="App">
        { instagram }
      </div>
    )

  }
}

export default App;
