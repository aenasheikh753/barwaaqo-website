import type { Product } from '../types/product.types';

export const PRODUCTS_DATA: Product[] = [
    {
        id: 'vegetables',
        icon: '🥬',
        category: 'Vegetable Seeds',
        description: 'Premium certified vegetable seeds optimized for tropical and semi-arid East African growing conditions.',
        items: ['Tomato', 'Pepper', 'Onion', 'Cabbage', 'Eggplant', 'Okra'],
        badge: 'Best Seller',
    },
    {
        id: 'cereals',
        icon: '🌾',
        category: 'Cereals & Pulses',
        description: 'High-yielding certified cereal and pulse varieties selected for drought tolerance and performance.',
        items: ['Maize', 'Sorghum', 'Millet', 'Cowpea', 'Lentils', 'Sesame'],
    },
    {
        id: 'fodder',
        icon: '🌿',
        category: 'Fodder & Forage',
        description: 'Quality fodder crop seeds for livestock support and rangeland rehabilitation programs.',
        items: ['Rhodes Grass', 'Brachiaria', 'Napier Grass', 'Desmodium', 'Stylosanthes'],
        badge: 'New',
    },
    {
        id: 'horticulture',
        icon: '🍋',
        category: 'Horticulture Solutions',
        description: 'Comprehensive horticulture inputs and planting materials for professional fruit and flower production.',
        items: ['Fruit Seedlings', 'Grafted Trees', 'Banana Tissue', 'Papaya', 'Citrus'],
    },
];
