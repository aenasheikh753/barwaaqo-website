import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../common/SectionHeader';

import { PRODUCTS_DATA } from '../../../data/products.data';
import type { Product } from '../../../types/product.types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="card-base p-7 flex flex-col gap-5 group hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-start justify-between">
            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                {product.icon}
            </div>
            {product.badge && (
                <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full
          ${product.badge === 'Best Seller' ? 'bg-cta/10 text-cta' : 'bg-accent/20 text-accent'}`}>
                    {product.badge}
                </span>
            )}
        </div>
        <div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-2 group-hover:text-cta transition-colors">
                {product.category}
            </h3>
            <p className="text-neutral-body text-sm font-body leading-relaxed">{product.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-border">
            {product.items.slice(0, 4).map((item) => (
                <span key={item} className="text-xs bg-base text-neutral-body font-body px-3 py-1 rounded-full border border-neutral-border">
                    {item}
                </span>
            ))}
            {product.items.length > 4 && (
                <span className="text-xs bg-cta/10 text-cta font-body font-semibold px-3 py-1 rounded-full">
                    +{product.items.length - 4} more
                </span>
            )}
        </div>
    </div>
);

const ProductsPreview: React.FC = () => (
    <section id="products" className="section-padding bg-base-dark">
        <div className="container-custom">
            <div className="flex flex-col items-center gap-12">
                <SectionHeader
                    tag="Our Products"
                    title="Seeds &"
                    titleHighlight="Agricultural Inputs"
                    subtitle="We source and supply certified seeds and quality agricultural inputs for all major crop types suited to Somalia and East Africa's diverse agro-ecological zones."
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {PRODUCTS_DATA.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <Link to="/contact" className="btn-outline">
                    Request Availability →
                </Link>
            </div>
        </div>
    </section>
);

export default ProductsPreview;
