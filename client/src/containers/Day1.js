import {
  shaderMaterial,
  Sparkles,
  Center,
  useTexture,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import i18n from "i18next";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";

const Day1 = () => {
  return (
    <div>
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
        <color args={["#030202"]} attach="background" />

        <OrbitControls makeDefault />

        <Center>
          <Sparkles
            size={6}
            scale={[4, 2, 4]}
            position-y={1}
            speed={0.2}
            count={80}
          />
        </Center>
      </Canvas>
      <Footer />
    </div>
  );
};

export default Day1;
