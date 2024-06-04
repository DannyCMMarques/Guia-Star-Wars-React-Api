import React from 'react';
import './Stars.module.css';
import styles from './Stars.module.css'
const Stars = () => {
    const numberOfStars = 250;
    const starsArray = Array.from({ length: numberOfStars }).map((_, index) => ({
        id: index,
        top: Math.random() * 100 + '%' ,
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 2 + 's'
    }));

    return (
        <div className={styles.starField}>
            {starsArray.map(star => (
                <div
                    key={star.id}
                    className={styles.star}
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDelay: star.animationDelay
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Stars;