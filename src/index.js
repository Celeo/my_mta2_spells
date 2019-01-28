import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import './index.css'
import spellData from './data.json'

const Spell = (props) => {
  return (
    <div>
      <h4>
        { props.arcanum } { props.level }: { props.name }
        { props.rating > 0 && <span className="spell-rating">{ '⭐'.repeat(props.rating) }</span> }
      </h4>
      <p className="spell-body"><strong>{ props.short }</strong></p>
      <p className="spell-reaches">{ props.reaches }</p>
      <hr />
    </div>
  )
}

Spell.propTypes = {
  arcanum: PropTypes.string,
  level: PropTypes.number,
  name: PropTypes.string,
  psf: PropTypes.string,
  short: PropTypes.string,
  reaches: PropTypes.string,
  rating: PropTypes.number
}

const Index = (props) => {
  return (
    <div className="container-medium">
      <div>
        {
          spellData.spells.map(s =>
            <Spell
              key={s.name}
              arcanum={s.arcanum}
              level={s.level}
              name={s.name}
              psf={s.psf}
              short={s.short}
              reaches={s.reaches}
              rating={s.rating}
            />)
        }
      </div>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))

module.hot.accept()
