export function InstructionsOverlay() {
  return (
    <div className="absolute bottom-6 right-6 z-10 bg-black bg-opacity-70 backdrop-blur-sm rounded-lg p-4 text-white text-sm max-w-xs">
      <div className="flex items-center mb-2">
        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
        <span className="text-green-400 font-medium">3D Model Loaded</span>
      </div>
      <div className="text-gray-300 space-y-1">
        <p>🖱️ Drag to orbit</p>
        <p>🖱️ Scroll to zoom</p>
        <p>📱 Touch to interact</p>
      </div>
      <div className="mt-3 pt-2 border-t border-gray-600">
        <p className="text-xs text-gray-400">Coliving_1M.compressed.ply</p>
      </div>
    </div>
  )
} 