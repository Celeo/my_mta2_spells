import React from 'react'
import PropTypes from 'prop-types'
import { Navbar } from 'react-materialize'
import { HashRouter as Router, Redirect, Route, NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import SpellListing from './SpellListing.js'

const App = (props) => {
  const navBrand = <a href="/" className="brand">Mage Helper</a>
  return (
    <Router>
      <Navbar brand={navBrand} alignLinks="right" className="blue darken-2">
        <NavLink to="/spells">Spells</NavLink>
        <NavLink to="/casting">Casting Rules</NavLink>
        <NavLink to="/fate_and_time" className="last-nav-item">Fate and Time Rules</NavLink>
      </Navbar>
      <div className="container-medium">
        <Route path="/" exact render={() => <Redirect to="/spells" />} />
        <Route path="/spells" render={() => <SpellListing spellData={props.spellData} />} />
        <Route path="/casting" render={() => <ReactMarkdown source={props.castingRules} className="markdown" />} />
        <Route path="/fate_and_time" render={() => <ReactMarkdown source={props.fateAndTimeRules} className="markdown" />} />
      </div>
    </Router>
  )
}

App.propTypes = {
  spellData: PropTypes.object.isRequired,
  castingRules: PropTypes.string.isRequired,
  fateAndTimeRules: PropTypes.string.isRequired
}

export default App
