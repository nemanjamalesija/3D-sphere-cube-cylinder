import { useTexture } from '@react-three/drei';
import { useRotation } from '../helpers/useRotation';
import { Euler } from 'three';

type SphereGeometryArgs = {
  radius: number;
};

const sphereGeometryArgs: SphereGeometryArgs = {
  radius: 1,
};

function Sphere() {
  const texture = useTexture('/textureSphere.png');
  const { rotation } = useRotation();
  return (
    <mesh rotation={new Euler(...rotation)} position={[-1, 0, 0]} castShadow>
      <sphereBufferGeometry args={[...Object.values(sphereGeometryArgs)]} />
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

export default Sphere;
