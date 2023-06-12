import React, { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Html, Preload, OrbitControls } from "@react-three/drei";
import { Popconfirm } from "antd";
import CTA from "../components/CTA.js";

const store = [
  {
    name: "Day 2",
    color: "lightpink",
    position: [10, 0, -15],
    url: "/2294472375_24a3b8ef46_o.jpg",
    link: 1,
  },
  {
    name: "inside",
    color: "lightblue",
    position: [15, 0, 0],
    url: "/Photosphere1.jpg",
    link: 0,
  },
];

const Day1 = () => {
  const [which, set] = useState(0);
  const { link, name, position } = store[which];
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore

  return (
    <div className="wrapper" style={{ width: "100vw", height: "100vh" }}>
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
          {/* <Dome onClick={() => set(link)} {...props} texture={maps[which]} /> */}
          <group>
            <mesh>
              <sphereGeometry args={[500, 60, 40]} />
              <meshBasicMaterial map={maps[which]} side={THREE.BackSide} />
            </mesh>
            <mesh position={position}>
              <sphereGeometry args={[1.25, 32, 32]} />
              <meshBasicMaterial color="white" />
              <Html center>
                <Popconfirm
                  title="Are you sure you want to leave?"
                  onConfirm={() => set(link)}
                  okText="Yes"
                  cancelText="No"
                >
                  {/* <a href="#">{name}</a> */}
                  <CTA
                    label={name}
                    destination={"/day2"}
                    style={{
                      bulma:
                        "button is-normal is-rounded is-light is-link my-6 ",
                    }}
                  />
                </Popconfirm>
              </Html>
            </mesh>
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Day1;
