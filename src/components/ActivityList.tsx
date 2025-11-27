import React from 'react';
import type {Activity} from './types';
import ActivityItem from './ActivityItem';

interface ActivityListProps {
    activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
    return (
        <>
            {activities.map((activity) => (
                <ActivityItem
                    key={activity.id}
                    {...activity}
                />
            ))}
        </>
    );
};

export default ActivityList;
