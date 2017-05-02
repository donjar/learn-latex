import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

class LatexMath extends React.Component {
  render() {
    if (this.props.display === "inline") {
      return (<InlineMath math={this.props.math} />);
    } else if (this.props.display === "block") {
      return (<BlockMath math={this.props.math} />);
    }
  }
}

export default LatexMath;
