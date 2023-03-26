import { Euler } from 'three';
import { useCustomContext } from '../context';
import { useRotation } from '../helpers/useRotation';
import { boxGeometryArgs } from '../types/types';

const Box = () => {
  const { rotation } = useRotation();
  const { randomValue } = useCustomContext();

  const geometryArgsBox: boxGeometryArgs = {
    width: randomValue,
  };

  return (
    <mesh rotation={new Euler(...rotation)} position={[-8, 0, 0]} castShadow>
      <boxBufferGeometry
        attach='geometry'
        args={Object.values(geometryArgsBox)}
      />
      <meshNormalMaterial attach='material' />
    </mesh>
  );
};

export default Box;
