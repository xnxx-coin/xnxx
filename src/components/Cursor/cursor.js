import React, { useEffect, useState, useRef } from 'react';
import styles from './cursor.module.scss';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleCursor);

        return () => {
            document.removeEventListener('mousemove', handleCursor);
        };
    }, []);

    return (
        <div 
        className={styles.cursor}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        ></div>
    );
};

export default Cursor;