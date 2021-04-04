import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: null,
      height: null,
      finalBmi: null,
      meaning: "",
    };
  }
  // changeHandler(event) {
  //   let myname = event.target.name;
  //   //console.log('myname: ' + myname);
  //   let myvalue = event.target.value;
  //   //console.log('myvalue: ' + myvalue);
  //   this.setState({ [myname]: myvalue });

  // }
  changeHandler = (event) => {
    let myweight = event.target.value;

    this.setState({ weight: myweight });
  };
  changeHandle = (event) => {
    let myheigth = event.target.value;

    this.setState({ height: myheigth });
  };

  calculateBMI = () => {
    let weight = this.state.weight;
    var height = this.state.height;
    if (weight > 0 && height > 0) {
      let finalBmi = weight / (((height / 100) * height) / 100);
      let meaning = "";

      this.setState({ finalBmi: finalBmi });

      if (finalBmi < 18.5) {
        meaning = "Siz normadan az kutle indeksine maliksiniz";
      }
      if (finalBmi >= 18.5 && finalBmi < 25) {
        meaning = "Siz normadasiniz.";
      }
      if (finalBmi >= 25) {
        meaning = "Sizin indeksiniz olduqca yuksekdir";
      }

      this.setState({ meaning: meaning });
    } else {
      alert("Xahis edirik melumatlari daxil edin");
    }
  };

  render() {
    return (
      <div className="container headelement">
        <div className="row mt-4">
          <div className="col-sm-12 ">
            <h2>Kutle indeksi kalkulyatoru</h2>
            <label className="lweig">Cekinizi daxil edin(kg): </label>{" "}
            <input
              type="text"
              name="weight"
              className="weig"
              onChange={this.changeHandler}
            />
            <br />
            <label className="lheig">Boyunuzu daxil edin(cm): </label>
            <input
              type="text"
              name="height"
              className="heig"
              onChange={this.changeHandle}
            />
            <br />
            <br />
            <button onClick={this.calculateBMI} className="btn btn-primary">
              Hesabla
            </button>
            <br />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12">
            <p>Sizin boy/kutle indeksiniz: {this.state.finalBmi}</p> <br />
            <p>Netice: {this.state.meaning}</p> <br />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
