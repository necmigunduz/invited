import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid, light } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react'

const Button = ({btnName, iconName, classes}) => {
  return (
    <button className={classes}>
      <FontAwesomeIcon icon={iconName} className="mx-1" />
      {btnName}
    </button>
  )
}

export default Button
