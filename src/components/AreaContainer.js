import React from 'react'
import CurrentArea from './CurrentArea'

const AreaContainer = () => {
    return (
        <div className='text-white text-5xl font-bold mt-5 tracking-wider'>
            Windows Area
            <div className='relative'>
                <CurrentArea/>
            </div>
            <div className='relative'>
                <div className='absolute h-[80vh] text-sm font-mono flex justify-center items-end ml-48'>
                    Thankyou
                </div>
            </div>
        </div>
    )
}

export default AreaContainer