import React from 'react'

export default function Review(props) {
    return (
        <div className='review'>
            <img src={props.src} />
            <div>
                <img src={props.star} />
                <div className='grey-text grey-text-first-heading my-2'>4.5 Score, 9 Review</div>
            </div>

        </div>
    )
}
