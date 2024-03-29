import React, { Component } from "react";

import { FormValidator } from "./FormValidator";
import { ValidationMessage } from "./ValidationMessage";

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      order: "",
      terms: false
    };

    this.rules = {
      name: { required: true, minlength: 3, alpha: true },
      email: { required: true, email: true },
      order: { required: true },
      terms: { true: true }
    };
  }

  updateFormValue = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateFormValueCheck = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    return (
      <div className="h5 bg-info text-white p-2">
        <FormValidator
          data={this.state}
          rules={this.rules}
          submit={this.props.submit}
        >
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.updateFormValue}
            />
            <ValidationMessage field="name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.updateFormValue}
            />
            <ValidationMessage field="email" />
          </div>

          <div className="form-group">
            <label>Order</label>
            <textarea
              className="form-control"
              name="order"
              value={this.state.order}
              onChange={this.updateFormValue}
            />
            <ValidationMessage field="order" />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="terms"
                checked={this.state.terms}
                onChange={this.updateFormValueCheck}
              />
              <label className="form-check-label">Agree to terms</label>
              <ValidationMessage field="terms" />
            </div>
          </div>
        </FormValidator>
      </div>
    );
  }
}
