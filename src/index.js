import React from 'react'
import ReactDOM from 'react-dom'
import { Tabs, Tab } from 'react-materialize'
import ReactMarkdown from 'react-markdown'

import '../node_modules/materialize-css/dist/js/materialize.js'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import 'rc-slider/assets/index.css'
import './index.css'

import SpellListing from './components/SpellListing.js'
import spellData from './data/spells.json'
import castingRules from './data/casting_rules.md'
import fateAndTimeRules from './data/fate_and_time_rules.md'

const Index = () => {
  return (
    <Tabs className="tabs-fixed-width z-depth-2">
      <Tab className="spacer-medium-top" title="Spells">
        <div className="container-medium">
          <SpellListing spellData={spellData} />
        </div>
      </Tab>
      <Tab className="spacer-medium-top" title="Casting Rules">
        <div className="container-medium">
          <ReactMarkdown source={castingRules} className="markdown" />
        </div>
      </Tab>
      <Tab className="spacer-medium-top" title="Fate and Time Rules">
        <div className="container-medium">
          <ReactMarkdown source={fateAndTimeRules} className="markdown" />
        </div>
      </Tab>
    </Tabs>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
