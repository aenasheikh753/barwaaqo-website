export const COMPANY_INFO = {
    name: 'Barwaaqo Agri Group',
    tagline: 'Precision Agriculture for a Prosperous Future',
    description: 'Barwaaqo Agri Group supports farmers, institutions, and investors through science-based agricultural advisory, responsible input systems, and scalable farm implementation solutions.',
    email: 'info@barwaaqoagri.com',
    whatsapp: '+252612345678',
    phone: '+252 61 234 5678',
    offices: {
        mogadishu: {
            city: 'Mogadishu',
            country: 'Somalia',
            address: 'KM4, Hodan District, Mogadishu, Somalia',
        },
        nairobi: {
            city: 'Nairobi',
            country: 'Kenya',
            address: 'Upper Hill, Nairobi, Kenya',
        },
    },
    socials: {
        facebook: 'https://facebook.com/barwaaqoagri',
        twitter: 'https://twitter.com/barwaaqoagri',
        linkedin: 'https://linkedin.com/company/barwaaqoagri',
        instagram: 'https://instagram.com/barwaaqoagri',
    },
};

export const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
        label: 'Services',
        href: '/services',
        dropdown: [
            { label: 'Agricultural Consulting', href: '/services/consulting' },
            { label: 'Certified Seeds & Inputs', href: '/services/seeds-inputs' },
            { label: 'Irrigation Planning', href: '/services/irrigation' },
            { label: 'Greenhouse Advisory', href: '/services/greenhouse' },
            { label: 'Soil & Crop Programs', href: '/services/soil-crop' },
            { label: 'Training & Projects', href: '/services/training-projects' },
        ],
    },
    {
        label: 'Products',
        href: '/products',
        dropdown: [
            { label: 'Vegetable Seeds', href: '/products/vegetable-seeds' },
            { label: 'Cereals & Pulses', href: '/products/cereals-pulses' },
            { label: 'Fodder & Forage', href: '/products/fodder-forage' },
            { label: 'Horticulture Solutions', href: '/products/horticulture' },
        ],
    },
    { label: 'Projects', href: '/projects' },
    { label: 'Training', href: '/training' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
];



export const OFFICE_HOURS = 'Mon–Fri: 8:00 AM – 5:00 PM (EAT)';
