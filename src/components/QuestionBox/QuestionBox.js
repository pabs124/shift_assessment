import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default class QuestionBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    let number = Number(evt.target.value);
    let result;
    if (number > 4) {
      result = this.props.dimension;
    }
    this.setState({
      value: evt.target.value
    });
    this.props.valueChanged(result, this.props.questionId, evt.target.value);
  }
  render() {
    return (
      <div style={{ padding: "2%" }}>
        <h3>{this.props.questionName}</h3>
        <div>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="position"
              name="position"
              value={this.state.value}
              onChange={this.handleChange}
              row
            >
              <p style={{ color: "red" }}>
                <b>Disagree</b>
              </p>
              <FormControlLabel
                value="1"
                control={<Radio color="secondary" />}
                label=""
                labelPlacement="start"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="    "
                labelPlacement="start"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="    "
                labelPlacement="start"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="    "
                labelPlacement="start"
              />
              <FormControlLabel
                value="5"
                control={<Radio color="primary" />}
                label="    "
                labelPlacement="start"
              />
              <FormControlLabel
                value="6"
                control={<Radio color="primary" />}
                label="    "
                labelPlacement="start"
              />
              <FormControlLabel
                value="7"
                control={<Radio color="primary" />}
                label="    "
                labelPlacement="start"
              />
              <p style={{ color: "lightgreen" }}>
                <b>Agree</b>
              </p>
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}
