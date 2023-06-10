import React from "react";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const Day5 = () => {
  return (
    <div className="wrapper" style={{ width: "100vw", height: "100vh" }}>
      <NavigationMenu />
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

      </Canvas>
      <Footer />
    </div>
  );
}

export default Day5;