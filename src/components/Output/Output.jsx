import React, { useState } from 'react';
import './Output.css'

const Output = () => {

    const [num, setNum] = useState(4);

    function getRandomNumber() {
        return Math.floor(Math.random() * 7);
    }

    // setNum(4);

    // const backgroundImageUrl = 'url(../../assets/image2.jpeg)';

    const styles1 = {
        // backgroundImage: 'url(../../assets/image2.jpeg)',
        // backgroundSize: 'contain'
        color : "white"
    };

    return (
        <div style={styles1} className='display'>
            <h1 className='upper'>upper</h1>
            <h1 className='lower'>lower</h1>
        </div>
    )
}

export default Output
