
import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              section.classList.add('in-view');
            }, delay);
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-10';
      case 'fade-in':
        return 'opacity-0';
      case 'slide-in-left':
        return 'opacity-0 -translate-x-10';
      case 'slide-in-right':
        return 'opacity-0 translate-x-10';
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
