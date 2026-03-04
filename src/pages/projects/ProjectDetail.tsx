import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import AnimatedButton from '../../components/common/AnimatedButton';

// placeholder data should ideally come from API or data file
const DUMMY_PROJECTS = [
  {
    id: 'commercial-farm',
    title: 'Commercial Farm Optimization',
    subtitle: 'Yield Improvement Success',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fee74a52?q=80&w=2000&auto=format&fit=crop',
    description:
      'In this project we partnered with a large commercial farm to implement precision agriculture techniques. The result was a 25% yield increase and 40% water savings.',
    details: [
      'Detailed soil analysis and tailored crop plan',
      'Installation of drip irrigation systems',
      'Regular monitoring and advisory visits',
      'Farmer training workshops and capacity building',
    ],
  },
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams() as { id: string };
  const project = DUMMY_PROJECTS.find((p) => p.id === id) || DUMMY_PROJECTS[0];
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={project.subtitle}
        image={project.image}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <p className="text-neutral-body leading-relaxed mb-6">
            {project.description}
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            {project.details.map((item) => (
              <li key={item} className="text-neutral-body">
                {item}
              </li>
            ))}
          </ul>
          <AnimatedButton variant="primary" onClick={() => navigate('/projects')}>
            ← Back to Projects
          </AnimatedButton>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
