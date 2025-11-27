import React, {type ReactNode } from 'react';
import Header from './Header';

interface SectionProps {
    title: string;
    children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <div className="section">
            <Header title={title} />
            <div className="content">
                <div className="line"></div>
                {children}
            </div>
        </div>
    );
};

export default Section;
