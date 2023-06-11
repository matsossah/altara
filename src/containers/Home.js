import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei"
import * as THREE from "three";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import Model from "../components/Model"
import Overlay from "../components/Overlay"

const Home = () => {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return (
    <div className="wrapper" style={{ width: "100vw", height: "100vh" }}>
      <NavigationMenu />
      <Canvas
        shadows
        eventSource={document.getElementById("canvas")} 
        eventPrefix="client"
      >
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
      <Footer />
    </div>
  );
};

export default Home;
