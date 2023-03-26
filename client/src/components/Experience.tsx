import { Stage, OrbitControls } from '@react-three/drei';
import Box from './Box';
import Cylinder from './Cylinder';
import Sphere from './Sphere';

const Experience = () => {
  return (
    <>
      <Stage
        intensity={1.5}
        environment='city'
        shadows={{
          type: 'accumulative',
          color: '#d9afd9',
          colorBlend: 2,
          opacity: 2,
        }}
      >
        <Box />
        <Sphere />
        <Cylinder />
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={4}
      />
      ;
    </>
  );
};

export default Experience;
