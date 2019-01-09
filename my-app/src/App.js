import React, { Component } from 'react';
import Title from "./components/Title";
import ImageElement from "./components/Image";
import Wrapper from "./components/Wrapper/wrapper";
import images from "./images.json";
import './App.css';

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };

  render() {
    return (
      
      <Wrapper>
      <Title>Reactive Clicky Game</Title>

      {this.state.images.map(images => (
        <ImageElement src={images.image} key={images.id}
        />))}

      {/* <img src="./images/one.png" alt="hello"></img> */}
      </Wrapper>
       
    );
  }
}

export default App;
