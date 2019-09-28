import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Transcript, H1, TryAgain } from './style';

import 'font-awesome/css/font-awesome.min.css';

const Conclusion = props => {
  console.log(props.userAnswerList);
  const finalScore = (props.score / props.quizData.length) * 100;
  if (finalScore >= 60) {
    return (
      <Wrapper>
        <H1>Congratulations! your score is {finalScore}%</H1>
        <Transcript>
          {props.quizData.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.question}</span>
                <span>{props.userAnswerList[index]}</span>
                {props.userAnswerList[index] === item.answer ? (
                  <i
                    className='fa fa-check fa-3x marker'
                    aria-hidden='true'
                  ></i>
                ) : (
                  <i
                    className='fa fa-times fa-3x marker'
                    aria-hidden='true'
                  ></i>
                )}
              </li>
            );
          })}
        </Transcript>
      </Wrapper>
    );
  }
  {
    return (
      <Wrapper>
        <H1>Sorry!your score is {finalScore}%</H1>
        <Link to='/'>
          <TryAgain>
            <a href='#'>
              <span>Try again</span>
            </a>
          </TryAgain>
        </Link>
      </Wrapper>
    );
  }
};
export default Conclusion;
