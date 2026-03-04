export interface ProjectData {
  id: string;
  tag: string;
  title: string;
  desc: string;
  impact: string[];
  subtitle?: string;
  image?: string;
  description?: string;
  details?: string[];
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'commercial-farm',
    tag: 'COMMERCIAL FARM OPTIMIZATION',
    title: 'Yield Improvement Success',
    desc: 'Increased yields by 20-30% through precision agriculture techniques.',
    impact: ['20-30% yield increase', 'Water efficiency gains', 'Reduced production loss'],
    subtitle: 'Yield Improvement Success',
    image: '/assets/images/field.jpg',
    description:
      'In this project we partnered with a large commercial farm to implement precision agriculture techniques. The result was a 25% yield increase and 40% water savings.',
    details: [
      'Detailed soil analysis and tailored crop plan',
      'Installation of drip irrigation systems',
      'Regular monitoring and advisory visits',
      'Farmer training workshops and capacity building',
    ],
  },
  // additional project entries could go here
];
