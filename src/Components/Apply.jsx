import React from 'react'
export default function Apply(props) {
  return (
  
        <div className='apply-color box-shadow p-5 selectable'>
            <div className='grey-white-color grey-white-second-heading'>{props.mainHeading}</div>
            <div className='grey-text grey-text-first-heading'>{props.bottomHeading}</div>
            <img className='apply-image' src={props.src}/>
        </div>
  )
}
