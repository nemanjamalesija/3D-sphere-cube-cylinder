import React, { useState } from 'react';
import { Euler } from 'three';
import { useRotation } from '../helpers/useRotation';

type boxGeometryArgs = {
  width: number;
  height: number;
  depth: number;
};

const geometryArgs: boxGeometryArgs = {
  width: 1.5,
  height: 1.5,
  depth: 1.5,
};

const Box = () => {
  const { rotation } = useRotation();

  return (
    <mesh rotation={new Euler(...rotation)} position={[-2.5, 0, 0]} castShadow>
      <boxBufferGeometry
        attach='geometry'
        args={[...Object.values(geometryArgs)]}
      />
      <meshNormalMaterial attach='material' />
    </mesh>
  );
};

export default Box;
