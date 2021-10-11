import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './pages/Home';
import SigninPage from './pages/SigninPage';

function App() {
  return (
    <Router>
      <Switch>
        <Home path="/" component={Home} exact />
        <SigninPage path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
