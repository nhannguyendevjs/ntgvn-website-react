import { useState } from 'react';

function Hello(props) {
    const [color, setColor] = useState(props.color);

    return (
        <>
            <div className='flex flex-col gap-4 items-center'>
                <h1 className='flex gap-1'>Hello <span className={color === 'Red' ? 'material-icons text-red-500' : color === 'Green' ? 'material-icons text-green-500' : 'material-icons text-blue-500'}>face</span> Developer!</h1>
                <button className='w-24 h-8 rounded-md bg-red-500 text-white' type='button' onClick={() => setColor('Red')}>Red</button>
                <button className='w-24 h-8 rounded-md bg-green-500 text-white' type='button' onClick={() => setColor('Green')}>Green</button>
                <button className='w-24 h-8 rounded-md bg-blue-500 text-white' type='button' onClick={() => setColor('Blue')}>Blue</button>
            </div>
        </>
    );
}

export default Hello;
