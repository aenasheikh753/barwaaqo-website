import React from 'react';
import { useAnimatedCounter } from '../../../hooks/useAnimatedCounter';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix = '', className = '' }) => {
    const { ref, isVisible } = useIntersectionObserver(0.3);
    const count = useAnimatedCounter(value, 2000, isVisible);

    return (
        <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
            {count.toLocaleString()}{suffix}
        </span>
    );
};

export default AnimatedCounter;
