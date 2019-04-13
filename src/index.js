import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import './index.css'
import spellData from './data.json'

const SpellReach = (props) => {
  const reachText = Array.from(Array(props.count).keys()).map(_ => '➕').join('')
  return (
    <p className="spell-reaches">{ reachText } { props.effect }</p>
  )
}

SpellReach.propTypes = {
  count: PropTypes.number,
  effect: PropTypes.string
}

const Spell = (props) => {
  return (
    <div>
      <h4>
        { props.arcanum } { props.level }: { props.name }
        { props.rating > 0 && <span className="spell-rating">{ '⭐'.repeat(props.rating) }</span> }
      </h4>
      { props.withstand ? <p className="withstand-rating">Withstand: { props.withstand }</p> : '' }
      <p className="spell-body"><strong>{ props.short }</strong></p>
      {
        props.reaches.map(r => <SpellReach key={r.count + ':' + r.effect} count={r.count} effect={r.effect} />)
      }
      <hr />
    </div>
  )
}

Spell.propTypes = {
  arcanum: PropTypes.string,
  level: PropTypes.number,
  name: PropTypes.string,
  psf: PropTypes.string,
  withstand: PropTypes.string,
  short: PropTypes.string,
  reaches: PropTypes.array,
  rating: PropTypes.number
}

const Index = (props) => {
  return (
    <div className="container-medium">
      {
        spellData.spells.map(s =>
          <Spell
            key={s.name}
            arcanum={s.arcanum}
            level={s.level}
            name={s.name}
            psf={s.psf}
            withstand={s.withstand}
            short={s.short}
            reaches={s.reaches}
            rating={s.rating}
          />)
      }
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))

module.hot.accept()
