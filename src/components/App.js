import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-materialize'
import ReactMarkdown from 'react-markdown'

import SpellListing from './SpellListing.js'

const App = (props) => {
  return (
    <Tabs className="tabs-fixed-width z-depth-2">
      <Tab className="spacer-medium-top" title="Spells">
        <div className="container-medium">
          <SpellListing spellData={props.spellData} />
        </div>
      </Tab>
      <Tab className="spacer-medium-top" title="Casting Rules">
        <div className="container-medium">
          <ReactMarkdown source={props.castingRules} className="markdown" />
        </div>
      </Tab>
      <Tab className="spacer-medium-top" title="Fate and Time Rules">
        <div className="container-medium">
          <ReactMarkdown source={props.fateAndTimeRules} className="markdown" />
        </div>
      </Tab>
    </Tabs>
  )
}

App.propTypes = {
  spellData: PropTypes.object.isRequired,
  castingRules: PropTypes.string.isRequired,
  fateAndTimeRules: PropTypes.string.isRequired
}

export default App
