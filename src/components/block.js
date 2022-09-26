import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react'

const Block = ({iconName, firstLine, secondLine}) => {
  return (
    <div className='flex my-6 items-center text-slate-600'>
      <FontAwesomeIcon icon={iconName} className="mr-6 border p-4 rounded-lg bg-white" />
      <div className='flex flex-col mr-6'>
        <span className='font-bold'>{firstLine}</span>
        <span>{secondLine}</span>
      </div>
      <div className='ml-auto'>
        <FontAwesomeIcon icon={solid('chevron-right')} />
      </div>  
    </div>
  )
}

export default Block
