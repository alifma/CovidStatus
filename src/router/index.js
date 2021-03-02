import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
const router = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/about" exact>
        <About/>
      </Route>
    </Switch>
  )
}
export default router