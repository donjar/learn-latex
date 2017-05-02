import React from 'react';
import { FormControl } from 'react-bootstrap';

class QuestionUserInput extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  render() {
    return (
      <div className="QuestionUserInput">
        <FormControl onChange={(e) => this.handleInputChange(e)}
                     onKeyPress={(e) => this.handleKeyPress(e)} />
      </div>
    );
  }

  handleKeyPress(e) {
    if (e.key !== "Enter") { return; }
    this.props.renderUserAnswer(this.state.input);
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
}

export default QuestionUserInput;
