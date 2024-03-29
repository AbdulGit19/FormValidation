import React, { Component } from "react";

import { ValidateData } from "./validation";
import { ValidationContext } from "./ValidationContext";

export class FormValidator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {},
      dirty: {},
      formSubmitted: false,
      getMessageForField: this.getMessageForField
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      error: ValidateData(props.data, props.rules)
    };
  }

  get formValid() {
    return Object.keys(this.state.error).length == 0;
  }

  handleChange = ev => {
    let name = ev.target.name;
    this.setState(state => (state.dirty[name] = true));
  };

  handleClick = ev => {
    this.setState({ formSubmitted: true }, () => {
      if (this.formValid) {
        this.props.submit(this.props.data);
      }
    });
  };

  getButtonClasses() {
    return this.state.formSubmitted && !this.formValid
      ? "btn-danger"
      : "btn-primary";
  }

  getMessageForField = field => {
    return this.state.formSubmitted || this.state.dirty[field]
      ? this.state.error[field] || []
      : [];
  };

  render() {
    return (
      <React.Fragment>
        <ValidationContext.Provider value={this.state}>
          <div onChange={this.handleChange}>{this.props.children}</div>
        </ValidationContext.Provider>
        <div className="text-center">
          <button
            className={`btn ${this.getButtonClasses()}`}
            onClick={this.handleClick}
            disabled={this.state.formSubmitted && !this.formValid}
          >
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}
