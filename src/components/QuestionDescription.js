import React from 'react';

class QuestionDescription extends React.Component {
  render() {
    return (
      <div className="QuestionDescription">{this.props.description}</div>
    );
  }
}

export default QuestionDescription;
