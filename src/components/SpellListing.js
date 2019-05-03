import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Spell from './Spell.js'
import ControlSliders from './ControlSliders.js'

const SpellListing = (props) => {
  const [fateLevel, setFateLevel] = useState(2)
  const [timeLevel, setTimeLevel] = useState(4)
  const [primeLevel, setPrimeLevel] = useState(1)

  const filtered = props.spellData.spells.filter(e =>
    (e.arcanum === 'Time' && e.level <= timeLevel) ||
    (e.arcanum === 'Fate' && e.level <= fateLevel) ||
    (e.arcanum === 'Prime' && e.level <= primeLevel)
  )

  return (
    <div>
      <ControlSliders
        rows={[
          [ 'Fate', fateLevel, setFateLevel ],
          [ 'Time', timeLevel, setTimeLevel ],
          [ 'Prime', primeLevel, setPrimeLevel ]
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
