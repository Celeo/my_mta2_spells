import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Spell from './Spell.js'
import ControlSliders from './ControlSliders.js'

const SpellListing = (props) => {
  const [fateLevel, setFateLevel] = useState([0, 2])
  const [timeLevel, setTimeLevel] = useState([0, 2])
  const [primeLevel, setPrimeLevel] = useState([0, 2])

  const btwn = (value, bottom, top) => bottom <= value && value <= top

  const filtered = props.spellData.spells.filter(e =>
    (e.arcanum === 'Fate' && btwn(e.level, fateLevel[0], fateLevel[1])) ||
    (e.arcanum === 'Time' && btwn(e.level, timeLevel[0], timeLevel[1])) ||
    (e.arcanum === 'Prime' && btwn(e.level, primeLevel[0], primeLevel[1]))
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
