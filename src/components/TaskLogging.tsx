import React from 'react';
import Section from './Section';
import ActivityList from './ActivityList';
import { activities } from './data';

const TaskLogging: React.FC = () => {
    return (
        <div className="notificationsFrame">
            <div className="panel">
                <Section title="Registro de tareas">
                    <ActivityList activities={activities} />
                </Section>
            </div>
        </div>
    );
};

export default TaskLogging;
