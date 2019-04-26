import React from 'react'
import PropTypes from 'prop-types'

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

export default SpellReach
