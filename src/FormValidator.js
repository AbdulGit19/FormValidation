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
      errors: ValidateData(props.data, props.rules)
    };
  }
}
