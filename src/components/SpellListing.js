import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Slider from 'rc-slider'

import './SpellListing.css'

const sliderMarks = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }

const SpellReach = (props) => {
  const reachText = Array.from(Array(props.count).keys()).map(_ => '➕').join('')
  return (
    <p className="spell-reaches">{ reachText } { props.effect }</p>
  )
}

SpellReach.propTypes = {
  count: PropTypes.number.isRequired,
  effect: PropTypes.string.isRequired
}

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

const ArcanumSlider = (props) => {
  return (
    <div>
      <h5 className="slider-title">{props.title}</h5>
      <Slider
        min={0}
        max={props.max}
        step={1}
        marks={sliderMarks}
        value={props.level}
        onChange={props.onChange}
      />
    </div>
  )
}

ArcanumSlider.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

const ControlSliders = (props) => {
  const [show, setShow] = useState(true)
  return (
    <div className="controls">
      <div className="flex-row">
        <button className="btn blue" onClick={() => setShow(!show)}>
          Filter <i className="material-icons right">{ show ? 'expand_more' : 'expand_less' }</i>
        </button>
      </div>
      <div className={'controls-actual' + (show ? ' hidden' : '')}>
        <div className="row">
          {
            props.rows.map((row, index) =>
              <div key={row[0]}>
                <div className="col m4 s12">
                  <ArcanumSlider title={row[0]} level={row[1]} max={row[3] || 5} onChange={row[2]} />
                </div>
                { index !== props.rows.length - 1 ? <div className="hide-on-med-and-up spacer" /> : null }
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

ControlSliders.propTypes = {
  rows: PropTypes.array.isRequired
}

const SpellListing = (props) => {
  const [fateLevel, setFateLevel] = useState(2)
  const [timeLevel, setTimeLevel] = useState(3)
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
          [ 'Prime', primeLevel, setPrimeLevel, 1 ]
        ]}
      />
      <div className="spell-listing">
        { filtered.map(s => <Spell key={s.name} {...s} />) }
      </div>
    </div>
  )
}

SpellListing.propTypes = {
  spellData: PropTypes.object.isRequired
}

export default SpellListing
