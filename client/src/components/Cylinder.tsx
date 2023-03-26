import { Euler } from 'three';
import { useCustomContext } from '../context';
import { useRotation } from '../helpers/useRotation';
import { cylinderGeometryArgs } from '../types/types';

const Cylinder = () => {
  const { rotation } = useRotation();
  const { randomValue } = useCustomContext();

  const geometryArgsCylinder: cylinderGeometryArgs = {
    radiusTop: 1,
    radiusBottom: 1,
    height: randomValue,
    radialSegments: 24,
    heightSements: 24,
  };

  return (
    <mesh rotation={new Euler(...rotation)} position={[5, 0, 0]} castShadow>
      <cylinderBufferGeometry args={Object.values(geometryArgsCylinder)} />
      <meshPhysicalMaterial
        color='#077252'
        roughness={0.5}
        metalness={0.5}
        wireframe={true}
      />
    </mesh>
  );
};

export default Cylinder;
