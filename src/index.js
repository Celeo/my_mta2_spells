import React from 'react'
import ReactDOM from 'react-dom'

import '../node_modules/materialize-css/dist/js/materialize.js'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import 'rc-slider/assets/index.css'
import './index.css'

import App from './components/App.js'

import spellData from './data/spells.json'
import castingRules from './data/casting_rules.md'
import fateAndTimeRules from './data/fate_and_time_rules.md'

const data = {
  spellData,
  castingRules,
  fateAndTimeRules
}

ReactDOM.render(<App {...data} />, document.getElementById('app'))
