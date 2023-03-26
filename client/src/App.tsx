import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Experience from './components/Experience';

function App() {
  return (
    <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
      <Experience />
    </Canvas>
  );
}

export default App;
