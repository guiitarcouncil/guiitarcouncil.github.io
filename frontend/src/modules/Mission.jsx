import React, { useEffect, useState } from 'react';
import './Mission.css';

function Mission({ startAnimation }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (startAnimation) {
            setIsVisible(true);
        }
    }, [startAnimation]);

    return (
        <div className={`our-mission ${isVisible ? 'visible' : ''}`}>
            <h2>Our Mission</h2>
            <div className="divider"></div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, hic inventore fuga quidem veritatis nesciunt.
            </p>
        </div>
    );
}

export default Mission;
