import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Fib from './components/Fib'
import NotFound from './components/NotFound'
import OtherPage from './components/OtherPage'

const App = () => {
  return (
    <div>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/otherpage'>Other Page</Link>
      </header>
      <Switch>
        <Route exact path='/' component={Fib} />
        <Route path='/otherpage' component={OtherPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App