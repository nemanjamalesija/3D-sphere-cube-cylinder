import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Euler } from 'three';

export const useRotation = () => {
  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame((state, delta) => {
    // Update the Y-axis rotation based on elapsed time
    setRotation([
      0,
      rotation[1] + delta * 0.8, // adjust the speed as desired
      0,
    ]);
  });

  return { rotation };
};
