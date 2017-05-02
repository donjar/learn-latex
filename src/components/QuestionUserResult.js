import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

class QuestionUserResult extends React.Component {
  render() {
    if (this.props.display === "inline") {
      return (
        <div className="QuestionUserResult">
          <InlineMath math={this.props.text} />
        </div>
      );
    } else if (this.props.display === "block") {
      return (
        <div className="QuestionUserResult">
          <BlockMath math={this.props.text} />
        </div>
      )
    }
  }
}

export default QuestionUserResult;
