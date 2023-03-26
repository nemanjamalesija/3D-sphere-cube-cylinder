import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}></Canvas>;
}

export default App;
