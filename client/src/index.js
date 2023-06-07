
// import ReactDOM from 'react-dom/client'
// import { useMemo } from "react";
// import './index.css';
// import App from './App';
import { Canvas } from '@react-three/fiber'
// import './fonts/ZonaPro/ZonaPro-Bold.otf';

// console.log(`yo: ${useMemo}`);
// const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(
//     <Canvas
//     flat
//     camera={ {
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [ 1, 2, 6 ]
//     } }
//     >   
//         <App />
//     </Canvas>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/ZonaPro/ZonaPro-Bold.otf';

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <App />
);