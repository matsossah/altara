import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei"
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import Model from "../components/Model"
import Overlay from "../components/Overlay"
import * as THREE from 'three'

const Home = () => {
  
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return (
    <div className="wrapper" style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
        }}
      >
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <NavigationMenu />
      <Footer/>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </div>
  );
};

export default Home;
