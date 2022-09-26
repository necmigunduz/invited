import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid, light } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react'

const Button = ({btnName}) => {
  return (
    <button className='border rounded-2xl px-4 py-2 bg-sky-600 text-white text-xs font-bold'>
      <FontAwesomeIcon icon={solid('hands')} className="mx-1" />
      {btnName}
    </button>
  )
}

export default Button
