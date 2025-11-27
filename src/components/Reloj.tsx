import React, { useEffect, useState } from 'react';
import InstantList from './InstantList';

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

    const [instants, setInstants] = useState<Instant[]>(() => {
        const saved = localStorage.getItem('instants');
        return saved ? (JSON.parse(saved) as Instant[]) : [];
    });

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

        setInstants((prev) => {
            const updated = [newInstant, ...prev];
            localStorage.setItem('instants', JSON.stringify(updated));
            return updated;
        });
    };

    const handleDeleteInstant = (id: number) => {
        setInstants((prev) => {
            const updated = prev.filter((instant) => instant.id !== id);
            localStorage.setItem('instants', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <div className="clock-container">
            <h2>Reloj</h2>
            <p className="clock-time">{formatTime(now)}</p>

            <button onClick={handleSaveInstant}>
                Guardar instante actual
            </button>

            <InstantList instants={instants} onDelete={handleDeleteInstant} />
        </div>
    );
};

export default Reloj;
