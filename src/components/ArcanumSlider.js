import React from 'react'
import PropTypes from 'prop-types'
import { Range } from 'rc-slider'

const sliderMarks = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }

const ArcanumSlider = (props) => {
  return (
    <div>
      <h5 className="slider-title">{props.title}</h5>
      <Range
        min={0}
        max={5}
        step={1}
        marks={sliderMarks}
        defaultValue={props.value}
        onChange={props.onChange}
      />
      <div className="spacer-medium" />
    </div>
  )
}

ArcanumSlider.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ArcanumSlider
