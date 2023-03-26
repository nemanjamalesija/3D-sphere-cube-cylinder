import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';

export const useRotation = () => {
  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame((state, delta) => {
    setRotation([0, rotation[1] + delta * 0.8, 0]);
  });

  return { rotation };
};
