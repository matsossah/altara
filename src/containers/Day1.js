import React, { Suspense, useState } from "react";
import { Canvas, useLoader } from '@react-three/fiber'
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import * as THREE from 'three'
import { Html, Preload, OrbitControls } from '@react-three/drei'
import { Popconfirm } from 'antd'

const Day1 = () => {
  const store = [
    { name: 'outside', color: 'lightpink', position: [10, 0, -15], url: '/2294472375_24a3b8ef46_o.jpg', link: 1 },
    { name: 'inside', color: 'lightblue', position: [15, 0, 0], url: '/Photosphere1.jpg', link: 0 }
    // ...
  ]

  return (
    <div className="wrapper" style={{ width: "100vw", height: "100vh" }}>
      <NavigationMenu />
      <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
      <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
      <Suspense fallback={null}>
        <Preload all />
        <Portals />
      </Suspense>
    </Canvas>
      <Footer />
    </div>
  );
};

export default Day1;
