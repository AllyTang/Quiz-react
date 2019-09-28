import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Introduction from './components/Introduction';
import Quiz from './components/Quiz';
import Conclusion from './components/Conclusion';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact component={Introduction}></Route>
        <Route path='/quiz' exact component={Quiz}></Route>
        <Route path='/conclusion' exact component={Conclusion}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
