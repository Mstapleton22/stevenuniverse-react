import React, { Component } from 'react';
import Card from './components/Card';
import Button from './components/Button'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      charExist: false,
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
      <div className="container-fluid">
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
        <div className="row justify-content-center py-5">
          <div className="col-8 text-center">
            <h1 className="pb-2">Steven Stars!</h1>
            <p className="pb-2">An app for randomly generating characters from the Steven Universe.</p>
            <button className="btn btn-danger btn-lg" onClick={this.generateChar}>Press Me</button>
          </div>
        </div>
        <div className="row justify-content-center">
          {this.state.charExist
            ? <Card
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
    );
  }
}

export default App;
