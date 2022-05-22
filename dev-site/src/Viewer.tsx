// @ts-nocheck - react-three doesn't support typescript
import "./App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function Viewer() {
  return (
    <div className="viewer-container">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment background files="studio024.hdr" />
        </Suspense>
      </Canvas>
    </div>
  );
}
