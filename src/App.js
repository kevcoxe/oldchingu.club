import React, { Component } from 'react';
import './App.css';
import Gallery from 'react-grid-gallery';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./pics', false, /\.(png|jpe?g|svg)$/));

class App extends Component {
  render() {
    const pics = images.map((image) => {
      return {
        src: image,
        thumbnail: image,
        isSelected: false,
      }
    })

    return (
      <div className="App">
        <Gallery
          images={pics}
          enableLightbox={false}
          enableImageSelection={false}
        />
      </div>
    );
  }
}

export default App;
