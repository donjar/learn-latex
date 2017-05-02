import React from 'react';
import LatexMath from './LatexMath';

class QuestionExpectedResult extends React.Component {
  render() {
    return (
      <div className="QuestionExpectedResult">
        <LatexMath display={this.props.display} math={this.props.text} />
      </div>
    );
  }
}

export default QuestionExpectedResult;
