import React from 'react';

interface Instant {
    id: number;
    time: string;
}

interface InstantListProps {
    instants: Instant[];
}

const InstantList: React.FC<InstantListProps> = ({ instants }) => {
    if (instants.length === 0) {
        return <p>No hay instantes guardados.</p>;
    }

    return (
        <div className="instant-list">
            <h3>Instantes guardados</h3>
            <ul>
                {instants.map((instant) => (
                    <li key={instant.id}>{instant.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default InstantList;
