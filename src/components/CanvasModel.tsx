// components/CanvasModel.tsx
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const CanvasModel = () => {
  const { scene } = useGLTF('macbook-pro.glb'); // Adjust the path
  const modelRef = useRef<any>(null); // Reference to the model

  // Slight up-and-down movement
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.05; // Oscillate
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.5} />;
};

export default CanvasModel;