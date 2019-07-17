import React, { Component } from "react";
import "./mainform.css";
import QuestionBox from "../QuestionBox/QuestionBox";
import Button from "@material-ui/core/Button";

export default class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: { E: 0, I: 0, S: 0, F: 0, N: 0, P: 0, T: 0, J: 0 },
      specificAnswers: {
        1: 0
      },
      questionsMarked: 0,
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valueChanged = this.valueChanged.bind(this);
    this.calculateResults = this.calculateResults.bind(this);
  }

  list = [
    {
      id: 1,
      name: "You find it takes effort to introduce yourself to other people.",
      dimension: "I"
    },
    {
      id: 2,
      name: "You consider yourself more practical than creative.",
      dimension: "S"
    },
    {
      id: 3,
      name:
        "Winning a debate matters less to you than making sure no one gets upset.",
      dimension: "F"
    },
    {
      id: 4,

      name:
        "You get energized going to social events that involve many interactions.",
      dimension: "E"
    },
    {
      id: 5,
      name:
        "You often spend time exploring unrealistic and impractical yet intriguing ideas.",
      dimension: "N"
    },
    {
      id: 6,
      name:
        "Deadlines seem to you to be of relative rather than absolute importance.",
      dimension: "P"
    },
    {
      id: 7,
      name:
        "Logic is usually more important than heart when it comes to making important decisions.",
      dimension: "T"
    },
    {
      id: 8,
      name: "Your home and work environments are quite tidy.",
      dimension: "J"
    },
    {
      id: 9,
      name: "You do not mind being at the center of attention.",
      dimension: "E"
    },
    {
      id: 10,
      name:
        "Keeping your options open is more important than having a to-do list.",
      dimension: "P"
    }
  ];

  calculateResults = function(obj) {
    let final = "";
    if (obj["E"] >= obj["I"]) {
      final += "E";
    } else if (obj["E"] < obj["I"]) {
      final += "I";
    }
    if (obj["S"] >= obj["N"]) {
      final += "S";
    } else if (obj["S"] < obj["N"]) {
      final += "N";
    }
    if (obj["T"] >= obj["F"]) {
      final += "T";
    } else if (obj["T"] < obj["F"]) {
      final += "F";
    }
    if (obj["J"] >= obj["P"]) {
      final += "J";
    } else if (obj["J"] < obj["P"]) {
      final += "P";
    }
    return final;
  };
  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.questionsMarked < 10) {
      alert("Please answer all 10 questions!");
      return;
    }
    if (this.state.email === "") {
      alert("Please enter an email");
      return;
    }
    let result = this.calculateResults(this.state.result);
    alert("Your MBTI test result is " + result);
    this.state = {
      result: { E: 0, I: 0, S: 0, F: 0, N: 0, P: 0, T: 0, J: 0 },

      questionsMarked: 0,
      email: ""
    };
  }
  handleChange(evt) {
    this.setState({
      email: evt.target.value
    });
  }

  valueChanged(i, id, value) {
    let newResult = { ...this.state.result };
    newResult[i]++;
    let marked = this.state.questionsMarked + 1;
    let markedAnswer = { ...this.state.specificAnswers };
    markedAnswer[id] = value;
    this.setState({
      result: newResult,
      questionsMarked: marked,
      specificAnswers: markedAnswer
    });
  }
  render() {
    return (
      <div className="main">
        <div className="heading">
          <h3 className="title">Discover your perspective</h3>
          <p>
            Complete the 7 min test and get a detailed report of your lenses on
            the world.
          </p>

          <form onSubmit={this.handleSubmit}>
            <div className="myForm">
              {this.list.map(item => (
                <QuestionBox
                  questionId={item.id}
                  questionName={item.name}
                  dimension={item.dimension}
                  valueChanged={this.valueChanged}
                />
              ))}
              <h3>Your Email</h3>
              <div className="textInput">
                <input
                  type="text"
                  name="email"
                  size="75"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
            </div>

            <Button type="Submit" variant="contained" color="primary">
              Save & Continue
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
