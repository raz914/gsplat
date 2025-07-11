import { Application, Entity } from '@playcanvas/react'
import { Camera, Render, Light, Script } from '@playcanvas/react/components'
import { OrbitControls } from '@playcanvas/react/scripts'
import { GSplatLoader, CameraPositionLogger } from '../scripts'

export function GaussianSplatViewer() {
  return (
    <div className="w-full h-full">
      <Application>
        {/* Camera with orbit controls and black background */}
        <Entity name="camera" position={[-14.003, 9.362, -6.345]}> 
          <Camera clearColor="#000000" />
          <Script script={CameraPositionLogger} />
          <OrbitControls 
            enableZoom={true}
            minDistance={-2000}
            maxDistance={2000}
            zoomSpeed={1.0}
            target={[1.7518108160372003, -1.180096741966549, 1.590505482905325]}
          />
        </Entity>

        {/* Directional light for general illumination */}
        <Entity name="light" position={[5, 5, 5]}>
          <Light type="directional" color="#ffffff" intensity={0.8} />
        </Entity>

        {/* Secondary omni light for softer fill lighting */}
        <Entity name="fill-light" position={[-5, -5, -5]}>
          <Light type="omni" color="#404040" intensity={0.3} range={50} />
        </Entity>

        {/* Gaussian Splat Model */}
        <Entity name="gaussian-splat" position={[0, 0, 0]} rotation={[180, 0, 0]}>
          <Script script={GSplatLoader} />
        </Entity>

      </Application>
    </div>
  )
} 