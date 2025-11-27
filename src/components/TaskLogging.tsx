import React from 'react';
import Section from './Section';
import ActivityList from './ActivityList';
import { activities } from './data';
import Reloj from "./Reloj.tsx";

const TaskLogging: React.FC = () => {
    return (
        <div className="notificationsFrame">
            <div className="panel">
                <Section title="Registro de tareas">
                    <ActivityList activities={activities} />
                </Section>
                <Section title="Reloj interactivo">
                    <Reloj />
                </Section>
            </div>
        </div>
    );
};

export default TaskLogging;
