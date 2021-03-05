import { Switch, Route } from 'react-router-dom'
import About from '../views/About'
import Landing from '../views/Landing'
import Details from '../views/Details'
const router = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing/>
      </Route>
      <Route path="/about" exact>
        <About/>
      </Route>
      <Route path="/:slug">
        <Details/>
      </Route>
    </Switch>
  )
}
export default router