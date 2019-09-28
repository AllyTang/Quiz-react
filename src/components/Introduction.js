import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Swing } from '../style';
import axios from 'axios';
class Introduction extends Component {
  loadQuiz = () => {
    axios.get('/api/quizData.json').then(res => {
      this.setState({
        imgLink: res.data.img[0].imgUrl
      });
    });
  };

  componentDidMount() {
    this.loadQuiz();
  }
  state = {
    imgLink: null
  };
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Swing>
            {' '}
            <img src={this.state.imgLink} alt='quiz' />
          </Swing>

          <Link to='/quiz'>
            <button className='button'>Start</button>
          </Link>
        </Wrapper>
      </React.Fragment>
    );
  }
}
export default Introduction;
