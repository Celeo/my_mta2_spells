import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-materialize'
import ArcanumSlider from './ArcanumSlider.js'

const ControlSliders = (props) => {
  const [show, setShow] = useState(true)
  return (
    <div>
      <div className="flex-row">
        <Modal trigger={
          <Button className="blue" onClick={() => setShow(!show)}>Filter</Button>
        }>
          <div className="row">
            <div className="col s12 l8 offset-l2">
              {
                props.rows.map((row, index) => {
                  console.log(row)
                  return <ArcanumSlider key={row[0]} title={row[0]} level={row[1]} onChange={row[2]} />
                })
              }
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

ControlSliders.propTypes = {
  rows: PropTypes.array.isRequired
}

export default ControlSliders
