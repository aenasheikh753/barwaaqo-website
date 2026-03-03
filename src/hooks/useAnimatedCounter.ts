import { useEffect, useRef, useState } from 'react';

export function useAnimatedCounter(target: number, duration = 2000, isActive = false) {
    const [count, setCount] = useState(0);
    const startTime = useRef<number | null>(null);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        if (!isActive) return;

        const animate = (timestamp: number) => {
            if (!startTime.current) startTime.current = timestamp;
            const elapsed = timestamp - startTime.current;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [target, duration, isActive]);

    return count;
}
