import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Overview, Users} from './pages/Overview';
import {  ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Members from './pages/Members'
import {Reports} from './pages/Reports'

function App() {
  return (
    <div className="App">
    <Router>
      <Sidebar />
      <Switch>
          <div className="mainContainer">
            <Route path="/" exact component={Overview} />
            <Route path='/overview' exact component={Overview} />
            <Route path='/overview/users' exact component={Users} />
            <Route path='/reports' exact component={Reports} />
            <Route path='/reports/reports1' exact component={ReportsOne} />
            <Route path='/reports/reports2' exact component={ReportsTwo} />
            <Route path='/reports/reports3' exact component={ReportsThree} />
            <Route path='/team' exact component={Team} />
          </div>
      </Switch>
      
    </Router>
    </div>
  );
}

export default App;
