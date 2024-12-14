import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';

function FloatingStaff() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 4, 32]} />
        <meshStandardMaterial color="#FFB800" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#FFF" emissive="#FFB800" emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingStaff />
      </Canvas>
    </div>
  );
}