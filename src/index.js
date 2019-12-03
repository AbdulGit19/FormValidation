import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Editor } from "./Editor";
import { Display } from "./Display";

import "bootstrap/dist/css/bootstrap.css";

import "./styles.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  submitData = newData => {
    this.setState({ formData: newData });
  };

  render() {
    return (
      <div className="conatiner-fluid">
        <div className="row p-2">
          <div className="col-6">
            <Editor submit={this.submitData} />
          </div>
          <div className="col-6">
            <Display data={this.state.formData} />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
