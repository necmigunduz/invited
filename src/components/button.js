import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
