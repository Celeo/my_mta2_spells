import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Spell from './Spell.js'
import ControlSliders from './ControlSliders.js'

const SpellListing = (props) => {
  const [minFateLevel, setMinFateLevel] = useState(0)
  const [maxFateLevel, setMaxFateLevel] = useState(2)
  const [minTimeLevel, setMinTimeLevel] = useState(0)
  const [maxTimeLevel, setMaxTimeLevel] = useState(4)
  const [minPrimeLevel, setMinPrimeLevel] = useState(0)
  const [maxPrimeLevel, setMaxPrimeLevel] = useState(1)

  const filtered = props.spellData.spells.filter(e =>
    (e.arcanum === 'Fate' && e.level >= minFateLevel && e.level <= maxFateLevel) ||
    (e.arcanum === 'Time' && e.level >= minTimeLevel && e.level <= maxTimeLevel) ||
    (e.arcanum === 'Prime' && e.level >= minPrimeLevel && e.level <= maxPrimeLevel)
  )

  const setFate = ([bottom, top]) => {
    setMinFateLevel(bottom)
    setMaxFateLevel(top)
  }

  const setTime = ([bottom, top]) => {
    setMinTimeLevel(bottom)
    setMaxTimeLevel(top)
  }

  const setPrime = ([bottom, top]) => {
    setMinPrimeLevel(bottom)
    setMaxPrimeLevel(top)
  }

  return (
    <div>
      <ControlSliders
        rows={[
          [ 'Fate', maxFateLevel, setFate ],
          [ 'Time', maxTimeLevel, setTime ],
          [ 'Prime', maxPrimeLevel, setPrime ]
        ]}
      />
      { filtered.map(s => <Spell key={s.name} {...s} />) }
    </div>
  )
}

SpellListing.propTypes = {
  spellData: PropTypes.object.isRequired
}

export default SpellListing
