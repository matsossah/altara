import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const SunriseSunset = () => {
  const meshRef = useRef();

  // Animation logic
  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (mesh) {
      // Adjust the rotation angle based on scroll position
      mesh.rotation.y = (clock.elapsedTime % 20) * 0.04; // Adjust the speed here
    }
  });

  useEffect(() => {
    // Enable scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const scrollPercentage = scrollPosition / (document.documentElement.scrollHeight - window.innerHeight);

      // Adjust the position of the mesh based on scroll percentage
      if (meshRef.current) {
        meshRef.current.position.y = -10 + scrollPercentage * 20; // Adjust the range here
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up scroll event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 0, -50]}>
      <boxBufferGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color="#ff8c00" />
    </mesh>
  );
};

export default SunriseSunset;