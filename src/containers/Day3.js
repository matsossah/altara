import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, OrbitControls } from "@react-three/drei";
import Portal from "../components/Portal.js";
import { useTranslation } from "react-i18next";
import NavigationMenu from "../components/NavigationMenu";

const Day3 = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationMenu />
      <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          autoRotate={false}
          rotateSpeed={-0.5}
        />
        <Suspense fallback={null}>
          <Preload all />
          <Portal
            url={"/2294472375_24a3b8ef46_o.jpg"}
            position={[15, 0, 0]}
            label={t("cover.day4cta")}
            destination={"/day4"}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Day3;