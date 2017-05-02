import React from 'react';
import LatexMath from './LatexMath';

class QuestionUserResult extends React.Component {
  render() {
    return (
      <div className="QuestionUserResult">
        <LatexMath display={this.props.display} math={this.props.text} />
      </div>
    );
  }
}

export default QuestionUserResult;
