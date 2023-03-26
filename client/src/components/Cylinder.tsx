import { Euler } from 'three';
import { useRotation } from '../helpers/useRotation';
import * as THREE from 'three';

const Cylinder = () => {
  const { rotation } = useRotation();

  type cylinderGeometryArgs = {
    radiusTop: number;
    radiusBottom: number;
    height: number;
    radialSegments: number;
    heightSements: number;
  };

  const geometryArgs: cylinderGeometryArgs = {
    radiusTop: 1,
    radiusBottom: 1,
    height: 1,
    radialSegments: 64,
    heightSements: 64,
  };

  const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

  const fragmentShader = `
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
  }
`;

  return (
    <mesh rotation={new Euler(...rotation)} position={[3, 0, 0]} castShadow>
      <cylinderBufferGeometry args={[...Object.values(geometryArgs)]} />
      <meshPhysicalMaterial
        color='#360033'
        roughness={0.5}
        metalness={0.5}
        wireframe={true}
      />
    </mesh>
  );
};

export default Cylinder;
