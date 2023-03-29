import React, { useMemo } from 'react';
import { Euler } from 'three';
import { useCustomContext } from '../context';
import { useRotation } from '../helpers/useRotation';
import { boxGeometryArgs } from '../types/types';

const Box = () => {
  const { rotation } = useRotation();
  const { randomValue } = useCustomContext();

  const boxArgs: boxGeometryArgs = useMemo(
    () => [randomValue, 4, 4],
    [randomValue]
  );

  return (
    <mesh rotation={new Euler(...rotation)} position={[-22, 0, 0]} castShadow>
      <boxGeometry attach='geometry' args={boxArgs} />
      <meshNormalMaterial attach='material' />
    </mesh>
  );
};

export default React.memo(Box);
