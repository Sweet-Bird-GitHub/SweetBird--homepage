import React, { useState } from 'react';

import './Detail.css'

const Detail = () => {

    const [iframeSrc, setIframeSrc] = useState('http://localhost:3000/');
    const [startIndex, setStartIndex] = useState(0);
    const [activeButton, setActiveButton] = useState(null);

    const buttons = [
        'http://localhost:3000/',
        'https://www.naver.com/',
        'https://www.naver.com/',
        'https://www.naver.com/',
        'https://www.naver.com/',
        'https://www.naver.com/',
        'https://www.naver.com/',
    ];
    
    const handleButtonClick = (newSrc, index) => {
        setIframeSrc(newSrc);
        setActiveButton(index);
    };

    const handleArrowClick = (direction) => {
        if (direction === 'up' && startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - 1);
        } else if (direction === 'down' && startIndex < buttons.length - 5) {
            setStartIndex((prevIndex) => prevIndex + 1);
        }
        setActiveButton(null);
    };

    return(
        <div className='detail-projects'>
            <div className='detail-projects-title'>작품 소개</div>
            <div className='detail-projects-view'>
                <div className='detail-projects-scroll'>
                
                    {startIndex == 0 && (
                        <button className='empty-arrow-button'>

                        </button>
                    )}

                    {startIndex > 0 && (
                        <button onClick={() => handleArrowClick('up')} className='arrow-button'>
                            ↑
                        </button>
                    )}

                    {buttons.slice(startIndex, startIndex + 5).map((button, index) => (
                        <button
                            key={index}
                            className={`detail-projects-scroll-button ${activeButton === index + startIndex ? 'active' : ''}`}
                            onClick={() => handleButtonClick(button, index + startIndex)}
                        >
                            {index + startIndex + 1}
                        </button>
                    ))}

                    {startIndex == buttons.length - 5 && (
                        <button className='empty-arrow-button'>

                        </button>
                    )}

                    {startIndex < buttons.length - 5 && (
                        <button onClick={() => handleArrowClick('down')} className='arrow-button'>
                            ↓
                        </button>
                    )}

                </div>
                <iframe className='detail-projects-iframe' title='detail-project-view-iframe' src={iframeSrc}>
                    
                </iframe>
            </div>
        </div>
    )
}

export default Detail