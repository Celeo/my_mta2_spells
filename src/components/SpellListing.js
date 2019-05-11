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

  const btwn = (value, bottom, top) => bottom <= value && value <= top

  const filtered = props.spellData.spells.filter(e =>
    (e.arcanum === 'Fate' && btwn(e.level, minFateLevel, maxFateLevel)) ||
    (e.arcanum === 'Time' && btwn(e.level, minTimeLevel, maxTimeLevel)) ||
    (e.arcanum === 'Prime' && btwn(e.level, minPrimeLevel, maxPrimeLevel))
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
