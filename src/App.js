import React from "react";
import Navigation from "./components/Navigation/Navigation.js";
import Logo from "./components/Logo/Logo.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
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
      imageUrl: '',
    };
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, [this.state.input])
    .then(
      function(response) {
        console.log(response.outputs[0].data.regions.[0].region_info.bounding_box)
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
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
