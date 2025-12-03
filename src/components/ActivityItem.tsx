import React from 'react';
import type {Activity} from './types';
import './ActivityItem.css';

type ActivityItemProps = Activity;

const ActivityItem: React.FC<ActivityItemProps> = ({
                                                       name,
                                                       image,
                                                       time,
                                                       text,
                                                   }) => {
    return (
        <div className="item">
            <div className="avatar">
                <img
                    alt={name}
                    src={`/images/${image}.jpg`}
                />
            </div>
            <span className="time">{time}</span>
            <p>{text}</p>
        </div>
    );
};

export default ActivityItem;
