import React, { Component } from 'react';
import { connect } from "react-redux";
import { addSmurf } from '../actions';

class SmurfForm extends Component {
      state = {
        smurf : {
        name: '',
        age: '',
        height: ''
        }
    };
  

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf : {
      name: '',
      age: '',
      height: ''
      }
    });
  }

  handleInputChange = event => {
    event.persist();
      this.setState(prevState => {
        return {
          smurf: {
            ...prevState.smurf,
            [event.target.name]: event.target.value 
          }
        }
      })
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <h1>Don't forget to add YOUR favorite SMURF HERE!!!</h1>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
            type = "text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
            type = "number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
            type = "text"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addSmurf })(SmurfForm);