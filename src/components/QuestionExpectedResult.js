import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

class QuestionExpectedResult extends React.Component {
  render() {
    if (this.props.display === "inline") {
      return (
        <div className="QuestionExpectedResult">
          <InlineMath math={this.props.text} />
        </div>
      );
    } else if (this.props.display === "block") {
      return (
        <div className="QuestionExpectedResult">
          <BlockMath math={this.props.text} />
        </div>
      )
    }
  }
}

export default QuestionExpectedResult;
