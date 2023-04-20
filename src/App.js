import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import MoveDetails from './components/MoveDetails'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/MoveDetails" component={MoveDetails} />
  </Switch>
)

export default App
