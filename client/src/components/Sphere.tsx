import React, { useMemo } from 'react';
import { useTexture } from '@react-three/drei';
import { useRotation } from '../helpers/useRotation';
import { Euler } from 'three';
import { useCustomContext } from '../context';
import { sphereGeometryArgs } from '../types/types';

function Sphere() {
  const texture = useTexture('/textureSphere.png');
  const { rotation } = useRotation();
  const { randomValue } = useCustomContext();

  const geometryArgsSphere: sphereGeometryArgs = useMemo(() => {
    return [randomValue];
  }, [randomValue]);

  return (
    <mesh rotation={new Euler(...rotation)} position={[0, 0, 0]} castShadow>
      <sphereGeometry args={geometryArgsSphere} />
      <meshPhysicalMaterial
        map={texture}
        clearcoat={1}
        clearcoatRoughness={0}
        roughness={0}
        metalness={0.5}
      />
    </mesh>
  );
}

export default React.memo(Sphere);
