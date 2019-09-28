import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { StyledOption, Wrapper, H1 } from './style';
import Conclusion from './Conclusion';

class Quiz extends Component {
  state = {
    userAnswer: null,
    userAnswerList: [],
    currentQuestion: 0,
    options: [],
    quizData: [],
    disabled: true,
    score: 0,
    endQuiz: false
  };
  loadQuiz = () => {
    axios.get('/api/quizData.json').then(res => {
      this.setState({
        quizData: res.data.data
      });
      const { currentQuestion, quizData } = this.state;
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[currentQuestion].question,
          options: quizData[currentQuestion].options,
          answers: quizData[currentQuestion].answer
        };
      });
    });
  };
  nextQuestionHandler = () => {
    const { userAnswer, answers, score } = this.state;
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      userAnswerList: [...this.state.userAnswerList, userAnswer]
    });
    if (userAnswer === answers) {
      this.setState({
        score: score + 1
      });
    }
  };

  checkAnswer = answer => {
    this.setState({
      userAnswer: answer,
      disabled: false
    });
  };

  endQuizHandler = () => {
    const { userAnswer, answers, score } = this.state;
    this.setState({
      userAnswerList: [...this.state.userAnswerList, userAnswer]
    });
    if (userAnswer === answers) {
      this.setState({
        score: score + 1
      });
    }
    if (this.state.currentQuestion === this.state.quizData.length - 1) {
      this.setState({
        endQuiz: true
      });
    }
  };

  componentDidMount() {
    this.loadQuiz();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      const { currentQuestion, quizData } = this.state;
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[currentQuestion].question,
          options: quizData[currentQuestion].options,
          answers: quizData[currentQuestion].answer
        };
      });
    }
  }
  render() {
    const {
      questions,
      options,
      currentQuestion,
      quizData,
      userAnswer,
      endQuiz
    } = this.state;
    if (endQuiz) {
      return (
        <Conclusion
          score={this.state.score}
          quizData={this.state.quizData}
          userAnswerList={this.state.userAnswerList}
        />
      );
    }
    return (
      <Wrapper>
        <H1>{questions}</H1>
        <span className='span'>{`Question ${currentQuestion + 1}/ ${
          quizData.length
        }`}</span>
        {options.map((option, index) => (
          <StyledOption
            key={index}
            className={`ui big floating message options
          ${userAnswer === option ? 'selected' : null}`}
            onClick={() => this.checkAnswer(option)}
          >
            {option}
          </StyledOption>
        ))}
        {currentQuestion < quizData.length - 1 && (
          <button
            className='button'
            disabled={this.state.disabled}
            onClick={this.nextQuestionHandler}
          >
            Next
          </button>
        )}
        {currentQuestion === quizData.length - 1 && (
          <button className='button' onClick={this.endQuizHandler}>
            Finish
          </button>
        )}
      </Wrapper>
    );
  }
}
export default Quiz;
