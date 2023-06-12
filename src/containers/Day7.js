import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, OrbitControls } from "@react-three/drei";
import Portal from "../components/Portal.js";
import { useTranslation } from "react-i18next";
import NavigationMenu from "../components/NavigationMenu";

const Day7 = () => {
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
            url={"/inside.jpg"}
            position={[0.6, 0, 25]}
            label={t("cover.day7cta")}
            destination={"/day7"}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Day7;