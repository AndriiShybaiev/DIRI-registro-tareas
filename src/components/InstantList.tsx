import React from 'react';

interface Instant {
    id: number;
    time: string;
}

interface InstantListProps {
    instants: Instant[];
    onDelete: (id: number) => void;
}

const InstantList: React.FC<InstantListProps> = ({ instants, onDelete }) => {
    if (instants.length === 0) {
        return <p>No hay instantes guardados.</p>;
    }

    return (
        <div className="instant-list">
            <h3>Instantes guardados</h3>
            <ul>
                {instants.map((instant) => (
                    <li key={instant.id}>
                        {instant.time}
                        <button onClick={() => onDelete(instant.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InstantList;
