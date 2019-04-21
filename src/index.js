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
    <Tabs className="tabs-fixed-width z-depth-2">
      <Tab className="spacer-medium-top" title="Spells">
        <div className="container-medium">
          <SpellListing spellData={spellData} />
        </div>
      </Tab>
      <Tab className="spacer-medium-top" title="Casting Rules">
        <div className="container-medium">
          <CastingRules />
        </div>
      </Tab>
    </Tabs>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
