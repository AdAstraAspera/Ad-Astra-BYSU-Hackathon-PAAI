import React from 'react';
import './App.css'; // import your CSS file
import backgroundImage from './assets/background.png'; // import the background image

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    _height: '110vh',
    get height() {
      return this._height;
    },
    set height(value) {
      this._height = value;
    },
    position: 'relative', // add position relative to the background div
  };

  const buttonStyle = {
    position: 'absolute',
    width: '266px',
    height: '71px',
    left: '160px',
    top: '271px',
    backgroundColor: '#615959',
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={backgroundStyle}>
      <button style={buttonStyle}>CTA </button>
      {/* your content goes here */}
    </div>
  );
}

export default App;