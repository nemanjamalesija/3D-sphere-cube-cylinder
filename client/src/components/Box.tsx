import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Euler } from 'three';

type BoxGeometryArgs = {
  width: number;
  height: number;
  depth: number;
};

const geometryArgs: BoxGeometryArgs = {
  width: 1.8,
  height: 1.8,
  depth: 1.8,
};

const Box = () => {
  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame((state, delta) => {
    // Update the Y-axis rotation based on elapsed time
    setRotation([
      0,
      rotation[1] + delta * 0.8, // adjust the speed as desired
      0,
    ]);
  });

  return (
    <mesh rotation={new Euler(...rotation)} position={[-1, 0, 0]} castShadow>
      <boxBufferGeometry
        attach='geometry'
        args={[...Object.values(geometryArgs)]}
      />
      <meshNormalMaterial attach='material' />
    </mesh>
  );
};

export default Box;
