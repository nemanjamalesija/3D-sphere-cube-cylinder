import React, { useMemo } from 'react';
import { Euler } from 'three';
import { useCustomContext } from '../context';
import { useRotation } from '../helpers/useRotation';
import { cylinderGeometryArgs } from '../types/types';

const Cylinder = () => {
  const { rotation } = useRotation();
  const { randomValue } = useCustomContext();

  const geometryArgsCylinder: cylinderGeometryArgs = useMemo(() => {
    return [1, 1, randomValue, 28, 28];
  }, [randomValue]);

  return (
    <mesh rotation={new Euler(...rotation)} position={[20, 0, 0]} castShadow>
      <cylinderGeometry args={geometryArgsCylinder} />
      <meshPhysicalMaterial
        color='#077252'
        roughness={0.5}
        metalness={0.5}
        wireframe={true}
      />
    </mesh>
  );
};

export default React.memo(Cylinder);
