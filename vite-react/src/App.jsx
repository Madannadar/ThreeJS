import {Canvas, useFrame} from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react'


const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(() => {
    if(meshRef.current){
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.005
    }
  })
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]}/>
      <meshLambertMaterial color={"#468585"} emissive={"#468585"}/>
      <Sparkles count={100} scale={1} size={6} speed={0.01} color={"#468585"} noise={0.1}/>
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', display:'flex',justifyContent:'center',alignItems:'center' }}>
      <OrbitControls enableZoom enablePan enableRotate/>
      <directionalLight position={[1, 1, 1]} intensity={10} color={"#9CDBA6"}/>
      <color  attach='background' args={['#F0f0f0']}/>
      <RotatingCube />
    </Canvas>
  )
}
export default App