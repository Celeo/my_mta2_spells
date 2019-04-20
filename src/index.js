import React from 'react'
import ReactDOM from 'react-dom'

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import 'rc-slider/assets/index.css'
import './index.css'

import SpellListing from './components/SpellListing.js'
import spellData from './data.json'

const Index = () => {
  return (
    <div className="container-medium" id="spell-listing">
      <SpellListing spellData={spellData} />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
