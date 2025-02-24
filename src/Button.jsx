import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Button = ({ iconUrl, href, className, ariaLabel, hoverColor = '#FF6347' }) => {
  const buttonRef = useRef(null);
  const iconRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    const icon = iconRef.current;

    const scaleEffect = () => {
      gsap.to(button, {
        scale: 1.1, 
        duration: 0.3, 
        ease: 'power2.inOut',
      });
      if (icon) {
        gsap.to(icon, {
          color: hoverColor, 
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }
      setShowInfo(true); // Show the information on hover
    };

    const resetScale = () => {
      gsap.to(button, {
        scale: 1, 
        duration: 0.3,
        ease: 'power2.inOut',
      });
      if (icon) {
        gsap.to(icon, {
          color: 'inherit', 
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }
      setShowInfo(false); // Hide the information on mouse leave
    };

    if (button) {
      button.addEventListener('mouseenter', scaleEffect);
      button.addEventListener('mouseleave', resetScale);
    }

    return () => {
      if (button) {
        button.removeEventListener('mouseenter', scaleEffect);
        button.removeEventListener('mouseleave', resetScale);
      }
    };
  }, [hoverColor]);

  return (
    <a
      href={href}
      className={`inline-block p-2 ${className}`}
      aria-label={ariaLabel}
      ref={buttonRef} 
    >
      {iconUrl && (typeof iconUrl === 'string' ? (
        <img ref={iconRef} src={iconUrl} alt={ariaLabel} className="w-6 h-6" />
      ) : (
        <div ref={iconRef} className="w-6 h-6">{iconUrl}</div>
      ))}

      {/* Show information (like URL) on hover */}
      {showInfo && (
        <div 
          className="absolute text-xs text-white bg-black px-2 py-1 rounded-md mt-2"
          style={{ top: '100%', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
        >
          {href}
        </div>
      )}
    </a>
  );
};

export default Button;
