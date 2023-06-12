import React, { Suspense } from "react";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

const Day3 = () => {
  return (
    <div className="wrapper" style={{ width: "100vw", height: "100vh" }}>
      <NavigationMenu />
      <Canvas>
        <ambientLight />
        <directionalLight color="red" intensity={10} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Footer />
    </div>
  );
};

export default Day3;