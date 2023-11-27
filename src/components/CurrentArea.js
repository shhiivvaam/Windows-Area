import React, {useState, useEffect} from 'react'

const CurrentArea = () => {

    const [size, setSize] = useState({height: window.innerHeight, width: window.innerWidth});

    function updateSize() {
        setSize({height: window.innerHeight, width: window.innerWidth});
    }

    useEffect(() => {
        console.log('Change happened');

        window.addEventListener('resize', updateSize);

        // optimizing
        return() => {
            window.removeEventListener('resize', updateSize);
        }
    },[])

    
    return (
        <div className='absolute overflow-hidden rounded-lg w-96 mt-52 text-sm flex flex-col'>
            <label className='text-violet-400 font-mono self-start ml-2'>
                Height : 
            </label>
            <input type='text' name='height' placeholder='height : ' readOnly
                className='bg-violet-300 rounded-lg h-10'
                value={size.height}
                />
            <div className='h-5'></div>
            <div className='h-1 rounded-lg bg-blue-400'></div>
            <div className='h-5'></div>
            <label className='text-violet-400 font-mono self-start ml-2'>
                Width : 
            </label>
            <input type='text' name='width' placeholder='width : ' readOnly
                className='bg-violet-300 rounded-lg h-10'
                value={size.width}
                />
        </div>
    )
}

export default CurrentArea