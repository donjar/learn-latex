import React from 'react';
import QuestionDescription from './QuestionDescription';
import QuestionExpectedResult from './QuestionExpectedResult';
import QuestionUserInput from './QuestionUserInput';
import QuestionUserResult from './QuestionUserResult';
import LatexHelper from '../helpers/LatexHelper';

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUserResult: "",
    };
  }

  render() {
    return (
      <div className="Question">
        <QuestionDescription description={this.props.description} />
        {this.renderAnswer()}
        <QuestionUserInput updateUserAnswer={(text) => this.updateUserAnswer(text)}/>
        {this.renderUserResult()}
      </div>
    );
  }

  renderAnswer() {
    const answer = this.props.answer;
    const latexAnswer = LatexHelper.renderLatex(answer);
    return <QuestionExpectedResult text={latexAnswer.text} display={latexAnswer.display} />
  }

  renderUserResult() {
    const result = this.state.currentUserResult;
    const latexResult = LatexHelper.renderLatex(result);
    if (latexResult === undefined) {
      return <QuestionUserResult text=" " display="inline" />
    }
    return <QuestionUserResult text={latexResult.text} display={latexResult.display} />
  }

  updateUserAnswer(text) {
    this.setState({
      currentUserResult: text,
    });
  }
}

export default Question;
