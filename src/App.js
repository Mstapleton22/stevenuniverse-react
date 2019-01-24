import React, { Component } from 'react';
import Card from './components/Card';

// import Background from "https://i.ytimg.com/vi/Q2gFfuy2W7s/maxresdefault.jpg";

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      charExist: false,
      image: '',
      name: '',
      gem: '',
      ability: '',
      fusionForm: '',
      characterArc: '',
      tags: []
    }
  }

  getRandomChar(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  generateChar = () => {
    const randomIndex = this.getRandomChar(this.state.characters.length - 1)
    const randomChar = this.state.characters[randomIndex]
    this.setState({
      charExist: true,
      image: randomChar.image,
      name: randomChar.name,
      gem: randomChar.gem,
      fusionForm: randomChar.fusionForm,
      ability: randomChar.ability,
      characterArc: randomChar.characterArc,
      tags: randomChar.tags
    })
  }

  componentDidMount() {
    fetch("https://stevenuniverse-api.herokuapp.com/")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          characters: JSONdata.stevenuniverse.characters
        })
      })
  }


  render() {
    console.log(this.generateChar)
    return (
      <div className="container-fluid background-image">
        <div className="row navbar justify-content-end pb-5">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="https://stevenuniverse-api.herokuapp.com/" target="blank">Hit the Route</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:mike.stapleton2@gmail.com">Wanna be jam buds?</a>
            </li>
          </ul>
        </div>
        {/* <div className="background-image"> */}
        <div className="row">
          <div className="col-6 text-center">
            <div className="row justify-content-center py-5">
              <div className="text-center">
                <h1 className="header mt-5 pr-5 pb-2">Steven Stars!</h1>
                <p className="header pb-2">An app for randomly generating characters from the Steven Universe.</p>
                <button className="btn btn-lg star" onClick={this.generateChar}><img src="https://avatanplus.com/files/resources/mid/595a59287a10415d08ec4634.png"></img></button>
              </div>
            </div>
          </div>
          <div id="card" className="col-6 justify-content-center">
            {this.state.charExist
              ? <Card
                image={this.state.image}
                name={this.state.name}
                gem={this.state.gem}
                ability={this.state.ability}
                fusionForm={this.state.fusionForm}
                characterArc={this.state.characterArc}
                tags={this.state.tags}
              />
              : ''}
          </div>
        </div>
        {/* </div> */}
      </div >
    );
  }
}

export default App;
