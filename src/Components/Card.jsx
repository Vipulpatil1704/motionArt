import React from 'react'

export default function Card(props) {
  return (
    <div className='feature-card my-3 p-5 box-shadow'>
        <img className='card-image'  src={props.src}/>
        <div className='grey-white-color grey-white-second-heading'>{props.mainHeading}</div>
        <div className='grey-text grey-text-first-heading'>{props.bottomHeading}</div>
    </div>
  )
}
