import React from 'react'
import PropTypes from 'prop-types'
import SpellReach from './SpellReach.js'

const Spell = (props) => {
  return (
    <div>
      <h4>
        { props.arcanum } { props.level }: { props.name }
        { props.rating > 0 && <span className="spell-rating">{ '⭐'.repeat(props.rating) }</span> }
      </h4>
      { props.withstand ? <p className="withstand-rating">Withstand: { props.withstand }</p> : null }
      <p className="spell-body"><strong>{ props.short }</strong></p>
      {
        props.reaches.map(r => <SpellReach key={r.count + ':' + r.effect} count={r.count} effect={r.effect} />)
      }
      <hr />
    </div>
  )
}

Spell.propTypes = {
  arcanum: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  psf: PropTypes.string.isRequired,
  withstand: PropTypes.string,
  short: PropTypes.string.isRequired,
  reaches: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired
}

export default Spell