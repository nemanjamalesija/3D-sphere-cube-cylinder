import { Canvas } from '@react-three/fiber';
import { io, Socket } from 'socket.io-client';
import { useEffect } from 'react';
import { Stage, OrbitControls } from '@react-three/drei';
import Box from './components/Box';
import Sphere from './components/Sphere';
import Cylinder from './components/Cylinder';
import { useCustomContext } from './context';

function App() {
  const { setRandomValue } = useCustomContext();
  const socket: Socket = io('http://localhost:3000');

  useEffect(() => {
    socket.on('basicEmit', (socket: number) => {
      setRandomValue(socket);
    });
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [4, 4, -12], fov: 35 }}
      frameloop='demand'
    >
      <>
        <Stage
          intensity={1.5}
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
        />
        ;
      </>
    </Canvas>
  );
}

export default App;
