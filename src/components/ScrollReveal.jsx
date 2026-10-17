import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  variant = 'up', // 'up' | 'scale'
  delay = 0, // 0, 100, 150, 200, 250, 300, 400, 500
  threshold = 0.1,
  as: Component = 'div',
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    // Check if IntersectionObserver is available
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  const initClass = variant === 'scale' ? 'reveal-scale-init' : 'reveal-init';
  const visibleClass = variant === 'scale' ? 'reveal-scale-visible' : 'reveal-visible';
  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <Component
      ref={domRef}
      className={`${initClass} ${isVisible ? visibleClass : ''} ${delayClass} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
