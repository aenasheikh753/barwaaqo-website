export interface Stat {
    id: string;
    value: number;
    suffix: string;
    label: string;
    icon: string;
}

export const STATS_DATA: Stat[] = [
    {
        id: 'farms',
        value: 500,
        suffix: '+',
        label: 'Farms Supported',
        icon: '🌾',
    },
    {
        id: 'farmers',
        value: 3200,
        suffix: '+',
        label: 'Farmers Trained',
        icon: '👨‍🌾',
    },
    {
        id: 'projects',
        value: 48,
        suffix: '+',
        label: 'Projects Delivered',
        icon: '📋',
    },
    {
        id: 'regions',
        value: 12,
        suffix: '',
        label: 'Regions Covered',
        icon: '🗺️',
    },
];
