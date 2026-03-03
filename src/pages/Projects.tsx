import React from 'react';

const Projects: React.FC = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary mb-8">Featured Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                    <div className="h-64 bg-primary/10"></div>
                    <div className="p-8">
                        <span className="text-accent font-bold text-sm uppercase">Commercial Farm Optimization</span>
                        <h3 className="text-2xl font-bold mt-2">Yield Improvement Success</h3>
                        <p className="text-text-light mt-4">Showing yield improvement (20–30%), water efficiency gains, and reduced production losses.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
