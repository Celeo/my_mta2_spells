import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Slider from 'rc-slider'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import 'rc-slider/assets/index.css'
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

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fateLevel: 2,
      timeLevel: 3
    }
    this.changeFateLevel = this.changeFateLevel.bind(this)
    this.changeTimeLevel = this.changeTimeLevel.bind(this)
  }

  changeFateLevel (val) {
    this.setState({ fateLevel: val })
  }

  changeTimeLevel (val) {
    this.setState({ timeLevel: val })
  }

  render () {
    const sliderMarks = { 0: 'None', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }
    const filtered = spellData.spells.filter(e => (e.arcanum === 'Time' && e.level <= this.state.timeLevel) || (e.arcanum === 'Fate' && e.level <= this.state.fateLevel))
    return (
      <div>
        <div className="controls">
          <div className="row">
            <div className="col m5 offset-m1 s12">
              <h5 className="slider-title">Fate</h5>
              <Slider
                min={0}
                max={5}
                step={1}
                marks={sliderMarks}
                value={this.state.fateLevel}
                onChange={this.changeFateLevel}
              />
            </div>
            <div className="hide-on-med-and-up spacer" />
            <div className="col m5 s12">
              <h5 className="slider-title">Time</h5>
              <Slider
                min={0}
                max={5}
                step={1}
                marks={sliderMarks}
                value={this.state.timeLevel}
                onChange={this.changeTimeLevel}
              />
            </div>
            <div className="hide-on-med-and-up spacer" />
          </div>
        </div>
        <div className="container-medium">
          {
            filtered.map(s =>
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
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))
