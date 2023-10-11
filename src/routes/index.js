import React from 'react'
import { Route } from 'react-router-dom'
import SecondPage from '../components/secondPage/SecondPage'
import Home from './home/Home'

const index = () => {
  return (
    <div>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/secondpage">
            <SecondPage />
        </Route>
    </div>
  )
}

export default index