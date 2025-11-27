import React, { useEffect, useState } from 'react';
import InstantList from "./InstantList.tsx";

interface Instant {
    id: number;
    time: string;
}

const formatTime = (date: Date): string => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
        date.getSeconds()
    )}`;
};

const Reloj: React.FC = () => {
    const [now, setNow] = useState<Date>(new Date());
    const [instants, setInstants] = useState<Instant[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleSaveInstant = () => {
        const newInstant: Instant = {
            id: Date.now(),
            time: formatTime(now),
        };
        setInstants((prev) => [newInstant, ...prev]);
    };

    return (
        <div className="clock-container">
            <h2>Reloj</h2>
            <p className="clock-time">{formatTime(now)}</p>

            <button onClick={handleSaveInstant}>
                Guardar instante actual
            </button>

            <InstantList instants={instants} />
        </div>
    );
};

export default Reloj;
