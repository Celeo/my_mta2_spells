import React from 'react'
import ReactDOM from 'react-dom'
import { Tabs, Tab } from 'react-materialize'

import '../node_modules/materialize-css/dist/js/materialize.js'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import 'rc-slider/assets/index.css'
import './index.css'

import SpellListing from './components/SpellListing.js'
import spellData from './data.json'
import CastingRules from './components/CastingRules.js'

const Index = () => {
  return (
    <div className="container-medium">
      <Tabs className="tabs-fixed-width z-depth-2">
        <Tab className="spacer-medium-top" title="Spells">
          <SpellListing spellData={spellData} />
        </Tab>
        <Tab className="spacer-medium-top" title="Casting Rules">
          <CastingRules />
        </Tab>
      </Tabs>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
