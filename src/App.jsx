import { GaussianSplatViewer, InstructionsOverlay, Header, UIControls } from './components'

function App() {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-black">
      {/* Header with NAVITAS logo */}
      <Header />
      
      {/* Full screen 3D canvas */}
      <GaussianSplatViewer />
      
      {/* UI Controls (3D, Location icons) */}
      <UIControls />
      
      {/* Instructions overlay */}
      <InstructionsOverlay />
    </div>
  )
}

export default App
