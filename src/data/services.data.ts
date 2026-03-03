import type { Service } from '../types/service.types';

export const SERVICES_DATA: Service[] = [
    {
        id: 'consulting',
        icon: '🌿',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop',
        title: 'Agricultural Consulting',
        description: 'Science-based agronomic advisory for commercial farms, cooperatives, and smallholders across East Africa.',
        features: ['Crop planning & rotation', 'Soil health management', 'Pest & disease control'],
    },
    {
        id: 'seeds',
        icon: '🌱',
        image: 'https://images.unsplash.com/photo-1542601906970-d1d82675075d?q=80&w=1000&auto=format&fit=crop',
        title: 'Certified Seeds & Inputs',
        description: 'Sourcing and distribution of certified seeds and quality agricultural inputs verified for East African conditions.',
        features: ['Open-pollinated varieties', 'Hybrid seed supply', 'Quality input sourcing'],
    },
    {
        id: 'irrigation',
        icon: '💧',
        image: 'https://images.unsplash.com/photo-1563514223351-8930438318f7?q=80&w=1000&auto=format&fit=crop',
        title: 'Irrigation Planning',
        description: 'Irrigation system design and optimization for water-efficient farming in arid and semi-arid regions.',
        features: ['Drip & spray systems', 'Water use efficiency', 'System installation support'],
    },
    {
        id: 'greenhouse',
        icon: '🏗️',
        image: 'https://images.unsplash.com/photo-1585059895524-72359e061381?q=80&w=1000&auto=format&fit=crop',
        title: 'Greenhouse Advisory',
        description: 'End-to-end greenhouse design, setup, crop management advisory for high-value vegetable production.',
        features: ['Site selection & design', 'Crop selection advisory', 'Environmental control'],
    },
    {
        id: 'soil',
        icon: '🧪',
        image: 'https://images.unsplash.com/photo-1541411191165-f184e0c52df2?q=80&w=1000&auto=format&fit=crop',
        title: 'Soil & Crop Programs',
        description: 'Comprehensive soil analysis and customized crop nutrition programs to maximize yield and sustainability.',
        features: ['Soil testing & analysis', 'Fertilizer programs', 'Yield optimization'],
    },
    {
        id: 'training',
        icon: '📚',
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop',
        title: 'Training & Projects',
        description: 'Farmer training programs, institutional capacity building, and project implementation for NGOs and government.',
        features: ['Farmer field schools', 'TOT programs', 'Project management'],
    },
];
