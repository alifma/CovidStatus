import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Landing from '../views/Landing'
const router = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing/>
      </Route>
      <Route path="/home" exact>
        <Home/>
      </Route>
      <Route path="/about" exact>
        <About/>
      </Route>
    </Switch>
  )
}
export default router