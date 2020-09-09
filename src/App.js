import React from "react";
import Navigation from "./components/Navigation/Navigation.js";
import Logo from "./components/Logo/Logo.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank";
import "./App.css";
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '20fd979dbbae4bdf9e75eafd84161330'
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log("click");

    app.models.predict("a403429f2ddf4b49b307e318f00e528b", ["https://samples.clarifai.com/puppy.jpeg"])
    .then(
      function(response) {
        console.log(response)
      },
      function(err) {
        console.err(err);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
